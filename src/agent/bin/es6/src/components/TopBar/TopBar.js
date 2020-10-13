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
export class TopBar {
    constructor(element, options, zendeskClient) {
        this.options = options;
        this.zendeskClient = zendeskClient;
        this.executeQuery = _.throttle(() => {
            Coveo.logSearchEvent(this.root.el, { name: 'CaseInputChange', type: 'Search' }, this.ticketContext);
            Coveo.executeQuery(this.root.el);
        }, 2000);
        this.root = new Dom(element);
    }
    bindCoveoEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            Coveo.$$(this.root).on('buildingQuery', function (e, args) {
                args.queryBuilder.addContext(_this.ticketContext);
            });
        });
    }
    setTicketContext(ticketContext) {
        this.ticketContext = ticketContext;
    }
    bindZendeskEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            this.zendeskClient.getClient().on('ticket_context_updated', (ticketContext) => {
                debugger;
                _this.setTicketContext(ticketContext);
                _this.executeQuery();
            });
            this.zendeskClient.getClient().get('instances').then((instancesData) => {
                var instances = instancesData.instances;
                var guid = Object.keys(instances).filter((instanceGuid) => {
                    return instances[instanceGuid].location.indexOf('ticket_sidebar') >= 0;
                }).join('');
                return this.zendeskClient.getClient().instance(guid);
            }).then((insightPanelClient) => {
                insightPanelClient.trigger('top_bar_loaded');
            });
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.bindCoveoEvents();
            this.bindZendeskEvents();
            this.options.autoTriggerQuery = true; //TODO: This is not ideal since we trigger 2 queries in some cases .. Could be improved
            var initializationHandler = new InitializationHandler(this.zendeskClient);
            initializationHandler.initializeSearchInterface(this.root.el, this.options);
            this.zendeskClient.getClient().invoke('resize', { width: '1000px', height: '500px' });
        });
    }
}
//# sourceMappingURL=TopBar.js.map