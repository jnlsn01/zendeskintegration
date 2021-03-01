import { ZendeskOptions } from "../models/ZendeskOptions";

export interface C4ZDComponent {
    tag: string
    init(element: HTMLElement, options: ZendeskOptions): Promise<void>;
}