var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserProfileModel } from "coveo-search-ui-extensions";
export class InitializationHandler {
    constructor(zendeskClient) {
        this.zendeskClient = zendeskClient;
        this.client = zendeskClient;
    }
    initializeSearchInterfaceWithUserActions(root, options, caseCreatedBy) {
        return __awaiter(this, void 0, void 0, function* () {
            var settings = yield this.client.getSettings();
            Coveo.SearchEndpoint.endpoints['default'] = new Coveo.SearchEndpoint({
                restUri: options.endpointUrl + '/rest/search',
                accessToken: options.searchToken,
                queryStringArguments: {
                    organizationId: settings.organizationId
                },
                renewAccessToken: () => {
                    var currentLocation = window.location;
                    window.location.href = currentLocation.pathname + currentLocation.hash;
                    return Promise.resolve("");
                }
            });
            var searchInterfaceOptions = {
                Analytics: {
                    searchHub: 'zd_' + options.product + '_' + options.location
                }
            };
            if (caseCreatedBy) {
                new UserProfileModel(root, {
                    searchEndpoint: Coveo.SearchEndpoint.endpoints.default,
                    organizationId: settings.organizationId,
                    restUri: options.endpointUrl
                });
                searchInterfaceOptions.UserActions = {
                    userId: caseCreatedBy,
                };
            }
            if (options.autoTriggerQuery === false) {
                searchInterfaceOptions.SearchInterface = {
                    autoTriggerQuery: false
                };
            }
            Coveo.init(root, searchInterfaceOptions);
        });
    }
    initializeSearchInterface(root, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.initializeSearchInterfaceWithUserActions(root, options, null);
        });
    }
}
//# sourceMappingURL=InitializationHandler.js.map