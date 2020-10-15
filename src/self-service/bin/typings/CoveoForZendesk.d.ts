import { ZendeskOptions } from "./models/ZendeskOptions";
export declare function init(options: ZendeskOptions): void;
export declare class CoveoInitializer {
    options: ZendeskOptions;
    constructor(options: ZendeskOptions);
    private computeSearchPageUrl;
    private isSearchPage;
    private getOptions;
    initCoveo(): void;
}
