
declare module '*.svg' {
    const content: string;
    export = content;
}

declare var ZAFClient:any

declare module 'zaf' {

    export interface ZendeskField {
        name: string,
        label: string
    }

    export interface ZendeskAPIField {
        type: string,
        name: string,
        title?: string,
        label?: string
    }
}
