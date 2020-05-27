/**
 *  Attributes of the **ZendeskOptions** class.
 */
export interface ZendeskOptions {
    /**
     * Name of the Zendesk Product.
     */
    product: string;

    /**
     * Name of the Zendesk Location.
     */
    location: string;

    /**
     * Search token to access the organization.
     */
    searchToken: string;

    /**
     * Url of the User Profiling Endpoint.
     */
    endpointUrl: string;
}