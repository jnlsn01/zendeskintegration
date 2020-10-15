import './Strings';
import { ZendeskOptions } from '../../models/ZendeskOptions';
import { ZendeskClient } from '../../zendesk/ZendeskClient/ZendeskClient';
/**
 * The AttachResult component allows a user to link a search result to something else in their external
 * system, for instance a case, incident, request, etc.
 */
export declare class InsightPanel {
    options: ZendeskOptions;
    zendeskClient: ZendeskClient;
    private ticketContext;
    private topBarClient;
    private root;
    constructor(element: HTMLElement, options: ZendeskOptions, zendeskClient: ZendeskClient);
    private flattenFields;
    private parseFieldList;
    private filterFields;
    private getTicketContext;
    private computeHeight;
    private executeQuery;
    private bindCoveoEvents;
    private setTicketContext;
    private bindZendeskEvents;
    private getRequesterEmail;
    init(enableUserActions: boolean): Promise<void>;
}
