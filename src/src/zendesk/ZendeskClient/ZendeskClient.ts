export class ZendeskClient {
    private client: any
    private metadata: any
    private zendeskFields: ZendeskFields

    constructor() {}

    public getClient() {
        if (!this.client)
            this.client = ZAFClient.init();
        return this.client;
    }

    public async getSettings() {
        if(!this.metadata)
            this.metadata = await this.getClient().metadata();
        return this.metadata.settings;
    }

    public async getTicketFields(): Promise<ZendeskFields> {
        if (!this.zendeskFields) {
            var allFieldsRequest = {
                url: '/api/v2/ticket_fields.json',
                type: 'GET',
                dataType: 'json'
            }
            this.zendeskFields = await this.getClient().request(allFieldsRequest);
        }
        return Promise.resolve(this.zendeskFields)
    }

}

