import { ZendeskField, ZendeskAPIField } from 'zaf';
export class ZendeskClient {
    private client: any
    private metadata: any
    private zendeskFields: ZendeskField[]

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

    public async getTicketFields(): Promise<ZendeskField[]> {
        if (!this.zendeskFields) {
            var allFieldsRequest = {
                url: '/api/v2/ticket_fields.json',
                type: 'GET',
                dataType: 'json'
            }
            //For some ludicrous reason, it's impossible to retreive all the fields
            //with one call. Plus, the rest call doesn't tell us which fields are custom
            //So we do that little song and dance to make this work
            var customFields = (<ZendeskAPIField[]> (await this.getClient().get('ticketFields')).ticketFields).filter(field => {
                return field.type != "built-in";
            }).map(field => {
                return {
                    name: `customField:${field.name}`,
                    label: field.label ? field.label : field.name
                }
            })
            var standardFields = (<ZendeskAPIField[]> (await this.getClient().request(allFieldsRequest)).ticket_fields).map(field => {
                return {
                    name: field.type,
                    label: field.title
                }
            })
            this.zendeskFields = standardFields.concat(customFields)
        }
        return Promise.resolve(this.zendeskFields)
    }

}

