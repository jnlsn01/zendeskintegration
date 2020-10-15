import './Strings';
import { ZendeskOptions } from '../../models/ZendeskOptions';
import { ZendeskClient } from '../../zendesk/ZendeskClient/ZendeskClient';
/**
 * The AttachResult component allows a user to link a search result to something else in their external
 * system, for instance a case, incident, request, etc.
 */
export declare class TopBar {
    options: ZendeskOptions;
    zendeskClient: ZendeskClient;
    private ticketContext;
    private root;
    constructor(element: HTMLElement, options: ZendeskOptions, zendeskClient: ZendeskClient);
    private executeQuery;
    private bindCoveoEvents;
    private setTicketContext;
    private bindZendeskEvents;
    init(): Promise<void>;
}
