var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class ZendeskClient {
    constructor() { }
    getClient() {
        if (!this.client)
            this.client = ZAFClient.init();
        return this.client;
    }
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.metadata)
                this.metadata = yield this.getClient().metadata();
            return this.metadata.settings;
        });
    }
    getTicketFields() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.zendeskFields) {
                var allFieldsRequest = {
                    url: '/api/v2/ticket_fields.json',
                    type: 'GET',
                    dataType: 'json'
                };
                //For some ludicrous reason, it's impossible to retreive all the fields
                //with one call. Plus, the rest call doesn't tell us which fields are custom
                //So we do that little song and dance to make this work
                var customFields = (yield this.getClient().get('ticketFields')).ticketFields.filter(field => {
                    return field.type != "built-in";
                }).map(field => {
                    return {
                        name: `customField:${field.name}`,
                        label: field.label ? field.label : field.name
                    };
                });
                var standardFields = (yield this.getClient().request(allFieldsRequest)).ticket_fields.map(field => {
                    return {
                        name: field.type,
                        label: field.title
                    };
                });
                this.zendeskFields = standardFields.concat(customFields);
            }
            return Promise.resolve(this.zendeskFields);
        });
    }
}
//# sourceMappingURL=ZendeskClient.js.map