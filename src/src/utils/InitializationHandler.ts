import { ZendeskClient } from "../zendesk/ZendeskClient/ZendeskClient";
import { ZendeskOptions } from "../models/ZendeskOptions";
import {} from "coveo-search-ui"
import {UserProfileModel} from "coveo-search-ui-extensions"

export class InitializationHandler {
    private client: ZendeskClient

    constructor(public zendeskClient:ZendeskClient) {
        this.client = zendeskClient;
    }

    public async initializeSearchInterfaceWithUserActions(root:HTMLElement, options: ZendeskOptions, caseCreatedBy: string) {
        var settings = await this.client.getSettings()
        Coveo.SearchEndpoint.endpoints['default'] = new Coveo.SearchEndpoint({
            restUri: options.endpointUrl + '/rest/search',
            accessToken: options.searchToken,
            queryStringArguments: {
                organizationId: settings.organizationId
            },
            renewAccessToken: () => {
                var currentLocation = window.location
                window.location.href = currentLocation.pathname + currentLocation.hash
                return Promise.resolve("");
            }
        });
        var searchInterfaceOptions:any = {
            Analytics: {
                searchHub: 'zd_' + options.product + '_' + options.location
            }
        }
        if(caseCreatedBy) {
            new UserProfileModel(root, {
                searchEndpoint: Coveo.SearchEndpoint.endpoints.default,
                organizationId: settings.organizationId,
                restUri: options.endpointUrl
            });
            searchInterfaceOptions.UserActions = {
                userId: caseCreatedBy,
            }
        }
        if(options.autoTriggerQuery === false) {
            searchInterfaceOptions.SearchInterface = {
                autoTriggerQuery: false
            }
        }
        Coveo.init(root, searchInterfaceOptions);
    }

    public async initializeSearchInterface(root:HTMLElement, options: ZendeskOptions) {
        this.initializeSearchInterfaceWithUserActions(root, options, null);
    }

}

