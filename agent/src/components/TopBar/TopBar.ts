import './Strings';
import { ZendeskOptions } from '../../models/ZendeskOptions';
import { ZendeskClient } from '../../zendesk/ZendeskClient/ZendeskClient';
import { InitializationHandler } from '../../utils/InitializationHandler';
import { Dom, IBuildingQueryEventArgs } from 'coveo-search-ui';
/**
 * The AttachResult component allows a user to link a search result to something else in their external
 * system, for instance a case, incident, request, etc.
 */
export class TopBar {

    private ticketContext: {[key: string]: string};
    private root: Dom;

    constructor(
        element: HTMLElement,
        public options: ZendeskOptions,
        public zendeskClient: ZendeskClient
    ) {
        this.root = new Dom(element)
    }

    private executeQuery = _.throttle(()=> {
        Coveo.logSearchEvent(this.root.el, { name: 'CaseInputChange', type: 'Search' }, this.ticketContext);
        Coveo.executeQuery(this.root.el);
    }, 2000);

    private async bindCoveoEvents() {
        var _this = this;
        Coveo.$$(this.root).on('buildingQuery', function(e: Event, args:IBuildingQueryEventArgs) {
            args.queryBuilder.addContext(_this.ticketContext)
        });
    }

    private setTicketContext(ticketContext: {[key: string]: string}) {
        this.ticketContext = ticketContext;
    }

    private async bindZendeskEvents() {
        var _this = this;
        this.zendeskClient.getClient().on('ticket_context_updated', (ticketContext: {[key: string]: string}) => {
            debugger;
            _this.setTicketContext(ticketContext)
            _this.executeQuery();
        });

        this.zendeskClient.getClient().get('instances').then((instancesData: any) => {
            var instances = instancesData.instances;
            var guid = Object.keys(instances).filter((instanceGuid: any) => {
                return instances[instanceGuid].location.indexOf('ticket_sidebar') >= 0;
            }).join('');
            return this.zendeskClient.getClient().instance(guid);
        }).then((insightPanelClient:any) => {
            insightPanelClient.trigger('top_bar_loaded');
        });
    }

    public async init() {
        this.bindCoveoEvents();
        this.bindZendeskEvents();
        this.options.autoTriggerQuery = true; //TODO: This is not ideal since we trigger 2 queries in some cases .. Could be improved
        var initializationHandler = new InitializationHandler(this.zendeskClient);
        initializationHandler.initializeSearchInterface(this.root.el, this.options)

        this.zendeskClient.getClient().invoke('resize', { width: '1000px', height: '500px' });
    }

}
