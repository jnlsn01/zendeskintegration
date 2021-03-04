/**
 *  Attributes of the **ZendeskOptions** class.
 */
export interface ZendeskOptions {
    /**
     * APIKey.
     */
    APIKey: string;

    /**
     * Coveo Organization Id.
     */
    organizationId: string;

    /**
     * URL of the search page (optional).
     */
    searchPageUrl?: string;

    /**
     * HTML Id of the search box (optional).
     */
    searchBoxId?: string;

    /**
     * HTML Id of the search interface (optional).
     */
    searchPageId?: string;

    /**
     * Name of the Search Page (URL).
     */
    searchPageName?: string;

    /**
     * Coveo JS UI Options
     */
    searchOptions?: any;

    /**
     * Called before coveoInititialization   
     */
    coveoBeforeInitialization?: (root: Promise<HTMLElement>, options: ZendeskOptions) => Promise<void>;

    /**
     * Overrides the Coveo.init function so parameters can be modified or add custom logic
     * 
     * by default executes the Coveo.init method
     */
    coveoInititialization?: (root: Promise<HTMLElement>, options: ZendeskOptions) => Promise<void>;

    /**
     * Called after coveoInititialization
     */
    coveoAfterInitialization?: (root: HTMLElement, options: ZendeskOptions) => void;
}
