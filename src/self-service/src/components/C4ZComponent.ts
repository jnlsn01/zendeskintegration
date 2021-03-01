import { ZendeskOptions } from "../models/ZendeskOptions";

export interface C4ZComponent {
    tag: string
    init(element: HTMLElement, options: ZendeskOptions): Promise<void>;
}