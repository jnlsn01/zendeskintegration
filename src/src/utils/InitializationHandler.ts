import { ZendeskClient } from "../zendesk/ZendeskClient/ZendeskClient";
import { ZendeskOptions } from "../models/ZendeskOptions";

export class InitializationHandler {
    private client: ZendeskClient

    constructor(public zendeskClient:ZendeskClient) {
        this.client = zendeskClient;
    }

    public async initializeSearchInterface(root:HTMLElement, options: ZendeskOptions) {
        var settings = await this.client.getSettings()
        Coveo.SearchEndpoint.endpoints['default'] = new Coveo.SearchEndpoint({
            restUri: options.endpointUrl,
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
        Coveo.init(root, {
            Analytics: {
                searchHub: 'zd_' + options.product + '_' + options.location
            }
        });
    }

}

