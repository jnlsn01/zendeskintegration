declare module '*.svg' {
    const content: string;
    export = content;
}

declare var ZAFClient:any

declare interface ZendeskFields {
    ticket_fields: any[]
}