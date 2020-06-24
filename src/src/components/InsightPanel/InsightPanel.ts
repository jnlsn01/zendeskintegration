import './Strings';
import { ZendeskOptions } from '../../models/ZendeskOptions';
import { ZendeskClient } from '../../zendesk/ZendeskClient/ZendeskClient';
import { InitializationHandler } from '../../utils/InitializationHandler';
import { Dom, IBuildingQueryEventArgs } from 'coveo-search-ui';
/**
 * The AttachResult component allows a user to link a search result to something else in their external
 * system, for instance a case, incident, request, etc.
 */
export class InsightPanel {

    private ticketContext: {[key: string]: string};
    private topBarClient: any;
    private root: Dom;

    constructor(
        element: HTMLElement,
        public options: ZendeskOptions,
        public zendeskClient: ZendeskClient
    ) {
        this.root = new Dom(element)
    }

    // Explode objects to flatten the metadata
    private flattenFields = function(prefix: string, fieldValues: {[key: string]: string}): {[key: string]: string} {
        var finalMap:{[key: string]: string} = {};
        if(!fieldValues) return finalMap;
        return Object.keys(fieldValues)
              .filter(fieldName => fieldName != "errors")
              .reduce((result:{[key: string]: string}, fieldName:string) => {
                  var fieldValue:string = fieldValues[fieldName];
                  var prefixedFieldName = prefix == '' ? fieldName : prefix + '.' + fieldName;
                  var fieldType = typeof fieldValue;
                  if(fieldType == "object") {
                      Object.assign(result, this.flattenFields(prefixedFieldName, fieldValue));
                  } else if(fieldType == "string" || fieldType == "boolean" || fieldType == "number"){
                    result[prefixedFieldName] = fieldValue;
                  }
                  return result;
              }, {});
    }

    private parseFieldList(fieldString: string): string[] {
        if (fieldString) {
            return fieldString.split(';');
        }
        return [];
    }

    private async filterFields(flattenFields: {[key: string]: string}): Promise<{[key: string]: string}> {
        var fieldNames = Object.keys(flattenFields);

        var settings = await this.zendeskClient.getSettings();
        //For all you snowflakes out there
        var whiteList = this.parseFieldList(settings.insightPanelFieldsAllowlist);
        var blackList = this.parseFieldList(settings.insightPanelFieldsBlocklist);

        return fieldNames.filter(fieldName => (whiteList.length == 0 || whiteList.some(whiteFieldName => new RegExp(whiteFieldName).test(fieldName))))
                         .filter(fieldName => (!blackList.some(blackFieldName => new RegExp(blackFieldName).test(fieldName))))
                         .reduce((result:{[key: string]: string}, fieldName: string) => {
                             result[fieldName] = flattenFields[fieldName];
                             return result;
                         }, {});
    }

    private async getTicketContext(): Promise<{[key: string]: string}> {
        var fieldsMetadata:ZendeskFields = await this.zendeskClient.getTicketFields()
        var ticket_fields = fieldsMetadata.ticket_fields.map(ticketField => {
          return 'ticket.' + ticketField.type;
        })
    
        var fieldValues = await this.zendeskClient.getClient().get(ticket_fields);
        var filteredFields = await this.filterFields(this.flattenFields('', fieldValues));
        //Dots aren't supported in context values, so we are replacing them with underscores
        var replacedDots = Object.keys(filteredFields).reduce((result:{[key: string]: string}, key:string) => {
            result[key.split('.').join('_')] = filteredFields[key];
            return result;
        },{});
        return replacedDots;
    }

    private computeHeight(): string {
        var windowHeight = window.outerHeight;
        return windowHeight/2 + 'px';
    }

    private executeQuery = _.throttle(()=> {
            Coveo.logSearchEvent(this.root.el, { name: 'CaseInputChange', type: 'Search' }, this.ticketContext);
            Coveo.executeQuery(this.root.el);
    }, 2000);

    private async bindCoveoEvents(requesterEmail: string) {
        var _this = this;
        Coveo.$$(this.root).on('buildingQuery', function(e: Event, args:IBuildingQueryEventArgs) {
            args.queryBuilder.addContext(_this.ticketContext)
            if (requesterEmail) {
                args.queryBuilder.userActions = { tagViewsOfUser: requesterEmail };
            }
        });
    }

    private setTicketContext(ticketContext: {[key: string]: string}) {
        this.ticketContext = ticketContext;
        if (this.topBarClient) {
            this.topBarClient.trigger('ticket_context_updated', this.ticketContext);
        }
    }

    private async bindZendeskEvents() {
        this.zendeskClient.getClient().on('*.changed', (e:Event) => {
            this.getTicketContext().then((ticketContext) => {
                this.setTicketContext(ticketContext);
                this.executeQuery();
            })
        });

        this.zendeskClient.getClient().get('instances').then((instancesData: any) => {
            var instances = instancesData.instances;
            var guid = Object.keys(instances).filter((instanceGuid: any) => {
                return instances[instanceGuid].location == 'top_bar';
            }).join('');
            return this.zendeskClient.getClient().instance(guid);
        }).then((topBarClient:any) => {
            this.topBarClient = topBarClient;
        });

        this.zendeskClient.getClient().on('top_bar_loaded', () => {
            this.setTicketContext(this.ticketContext);
        })
    }

    public async init(enableUserActions: boolean) {
        this.setTicketContext(await this.getTicketContext());
        this.bindZendeskEvents();
        var initializationHandler = new InitializationHandler(this.zendeskClient);

        if (enableUserActions) {
            var requester =  await this.zendeskClient.getClient().get('ticket.requester');
            var requesterEmail = requester['ticket.requester'].email
            this.bindCoveoEvents(requesterEmail);
            initializationHandler.initializeSearchInterfaceWithUserActions(this.root.el, this.options, requesterEmail);
        } else {
            this.bindCoveoEvents(null);
            initializationHandler.initializeSearchInterface(this.root.el, this.options)
        }

        this.zendeskClient.getClient().invoke('resize', { width: '100%', height: this.computeHeight() });
    }

}
