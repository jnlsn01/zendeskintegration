import { ZendeskClient } from "../zendesk/ZendeskClient/ZendeskClient";
import { ZendeskOptions } from "../models/ZendeskOptions";
export declare class InitializationHandler {
    zendeskClient: ZendeskClient;
    private client;
    constructor(zendeskClient: ZendeskClient);
    initializeSearchInterfaceWithUserActions(root: HTMLElement, options: ZendeskOptions, caseCreatedBy: string): Promise<void>;
    initializeSearchInterface(root: HTMLElement, options: ZendeskOptions): Promise<void>;
}
