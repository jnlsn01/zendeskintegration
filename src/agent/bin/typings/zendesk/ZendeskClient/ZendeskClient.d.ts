import { ZendeskField } from 'zaf';
export declare class ZendeskClient {
    private client;
    private metadata;
    private zendeskFields;
    constructor();
    getClient(): any;
    getSettings(): Promise<any>;
    getTicketFields(): Promise<ZendeskField[]>;
}
