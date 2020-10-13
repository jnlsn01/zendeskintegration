var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import './Strings';
import { InitializationHandler } from '../../utils/InitializationHandler';
import { Dom } from 'coveo-search-ui';
/**
 * The AttachResult component allows a user to link a search result to something else in their external
 * system, for instance a case, incident, request, etc.
 */
export class InsightPanel {
    constructor(element, options, zendeskClient) {
        this.options = options;
        this.zendeskClient = zendeskClient;
        // Explode objects to flatten the metadata
        this.flattenFields = function (prefix, fieldValues) {
            var finalMap = {};
            if (!fieldValues)
                return finalMap;
            return Object.keys(fieldValues)
                .filter(fieldName => fieldName != "errors")
                .reduce((result, fieldName) => {
                var fieldValue = fieldValues[fieldName];
                var prefixedFieldName = prefix == '' ? fieldName : prefix + '.' + fieldName;
                var fieldType = typeof fieldValue;
                if (fieldType == "object") {
                    Object.assign(result, this.flattenFields(prefixedFieldName, fieldValue));
                }
                else if (fieldType == "string" || fieldType == "boolean" || fieldType == "number") {
                    result[prefixedFieldName] = fieldValue;
                }
                return result;
            }, {});
        };
        this.executeQuery = _.throttle(() => {
            Coveo.logSearchEvent(this.root.el, { name: 'CaseInputChange', type: 'Search' }, this.ticketContext);
            Coveo.executeQuery(this.root.el);
        }, 2000);
        this.root = new Dom(element);
    }
    parseFieldList(fieldString) {
        if (fieldString) {
            return fieldString.split(';');
        }
        return [];
    }
    filterFields(flattenFields) {
        return __awaiter(this, void 0, void 0, function* () {
            var fieldNames = Object.keys(flattenFields);
            var settings = yield this.zendeskClient.getSettings();
            //For all you snowflakes out there
            var whiteList = this.parseFieldList(settings.insightPanelFieldsAllowlist);
            var blackList = this.parseFieldList(settings.insightPanelFieldsBlocklist);
            return fieldNames.filter(fieldName => (whiteList.length == 0 || whiteList.some(whiteFieldName => new RegExp(whiteFieldName).test(fieldName))))
                .filter(fieldName => (!blackList.some(blackFieldName => new RegExp(blackFieldName).test(fieldName))))
                .reduce((result, fieldName) => {
                result[fieldName] = flattenFields[fieldName];
                return result;
            }, {});
        });
    }
    getTicketContext() {
        return __awaiter(this, void 0, void 0, function* () {
            var fieldsMetadata = yield this.zendeskClient.getTicketFields();
            var ticket_fields = fieldsMetadata.map(field => {
                return `ticket.${field.name}`;
            });
            var fieldValues = yield this.zendeskClient.getClient().get(ticket_fields);
            var renamedFieldValues = {};
            fieldsMetadata.forEach(field => {
                renamedFieldValues[`ticket.${field.label}`] = fieldValues[`ticket.${field.name}`];
            });
            var filteredFields = yield this.filterFields(this.flattenFields('', renamedFieldValues));
            //Dots aren't supported in context values, so we are replacing them with underscores
            var replacedDots = Object.keys(filteredFields).reduce((result, key) => {
                result[key.split('.').join('_')] = filteredFields[key];
                return result;
            }, {});
            return replacedDots;
        });
    }
    computeHeight() {
        var windowHeight = window.outerHeight;
        return windowHeight / 2 + 'px';
    }
    bindCoveoEvents(requesterEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            Coveo.$$(this.root).on('buildingQuery', function (e, args) {
                args.queryBuilder.addContext(_this.ticketContext);
                if (requesterEmail) {
                    args.queryBuilder.userActions = { tagViewsOfUser: requesterEmail };
                }
            });
        });
    }
    setTicketContext(ticketContext) {
        this.ticketContext = ticketContext;
        if (this.topBarClient) {
            this.topBarClient.trigger('ticket_context_updated', this.ticketContext);
        }
    }
    bindZendeskEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            this.zendeskClient.getClient().on('*.changed', (e) => {
                this.getTicketContext().then((ticketContext) => {
                    this.setTicketContext(ticketContext);
                    this.executeQuery();
                });
            });
            this.zendeskClient.getClient().get('instances').then((instancesData) => {
                var instances = instancesData.instances;
                var guid = Object.keys(instances).filter((instanceGuid) => {
                    return instances[instanceGuid].location == 'top_bar';
                }).join('');
                return this.zendeskClient.getClient().instance(guid);
            }).then((topBarClient) => {
                this.topBarClient = topBarClient;
            });
            this.zendeskClient.getClient().on('top_bar_loaded', () => {
                this.setTicketContext(this.ticketContext);
            });
        });
    }
    getRequesterEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            var requester = yield this.zendeskClient.getClient().get('ticket.requester');
            if (requester['ticket.requester']) {
                return requester['ticket.requester'].email;
            }
            return undefined;
        });
    }
    init(enableUserActions) {
        return __awaiter(this, void 0, void 0, function* () {
            this.setTicketContext(yield this.getTicketContext());
            this.bindZendeskEvents();
            var initializationHandler = new InitializationHandler(this.zendeskClient);
            var requesterEmail = yield this.getRequesterEmail();
            if (enableUserActions && requesterEmail) {
                this.bindCoveoEvents(requesterEmail);
                initializationHandler.initializeSearchInterfaceWithUserActions(this.root.el, this.options, requesterEmail);
            }
            else {
                this.bindCoveoEvents(null);
                initializationHandler.initializeSearchInterface(this.root.el, this.options);
            }
            this.zendeskClient.getClient().invoke('resize', { width: '100%', height: this.computeHeight() });
        });
    }
}
//# sourceMappingURL=InsightPanel.js.map