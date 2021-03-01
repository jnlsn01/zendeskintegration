import { } from "coveo-search-ui";
import { ZendeskOptions } from "./models/ZendeskOptions";
import { C4ZDComponentHelper } from "./components/C4ZDComponentHelper";

export function init(options: ZendeskOptions) {
    new CoveoInitializer(options).initCoveo();
}

export class CoveoInitializer {
    constructor(public options: ZendeskOptions) { }

    private computeSearchPageUrl() {
        if (this.options.searchPageUrl) return this.options.searchPageUrl;
        return '/' + window.location.pathname.split('/').slice(1, 3).join('/') + '/search';
    }

    private isSearchPage() {
        const searchPage = this.options.searchPageName ? this.options.searchPageName : 'search';
        return window.location.pathname.indexOf(searchPage) >= 0;
    }

    private getOptions(): any {
        return this.options.searchOptions ? this.options.searchOptions : {}
    }

    public initCoveo() {
        const searchBoxRoot = document.getElementById(this.options.searchBoxId);
        const searchPageRoot = document.getElementById(this.options.searchPageId);

        Coveo.SearchEndpoint.configureCloudV2Endpoint(
            this.options.organizationId,
            this.options.APIKey
        );

        this.options.searchOptions = this.getOptions();
        let searchOptions = this.options.searchOptions;
        if (this.isSearchPage()) {
            if (searchOptions.externalComponents) {
               searchOptions.externalComponents.push(searchBoxRoot);
            } else {
                searchOptions.externalComponents = [searchBoxRoot];
            }
            if (searchPageRoot)
                Coveo.init(searchPageRoot, searchOptions);
        } else {
            Coveo.initSearchbox(searchBoxRoot, this.computeSearchPageUrl());
        }

        C4ZDComponentHelper.initComponents(this.options);
    }
}
