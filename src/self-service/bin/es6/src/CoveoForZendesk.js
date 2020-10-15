export function init(options) {
    new CoveoInitializer(options).initCoveo();
}
export class CoveoInitializer {
    constructor(options) {
        this.options = options;
    }
    computeSearchPageUrl() {
        if (this.options.searchPageUrl)
            return this.options.searchPageUrl;
        return '/' + window.location.pathname.split('/').slice(1, 3).join('/') + '/search';
    }
    isSearchPage() {
        const searchPage = this.options.searchPageName ? this.options.searchPageName : 'search';
        return window.location.pathname.indexOf(searchPage) >= 0;
    }
    getOptions() {
        return this.options.searchOptions ? this.options.searchOptions : {};
    }
    initCoveo() {
        const searchBoxRoot = document.getElementById(this.options.searchBoxId);
        const searchPageRoot = document.getElementById(this.options.searchPageId);
        Coveo.SearchEndpoint.configureCloudV2Endpoint("", this.options.APIKey);
        if (this.isSearchPage()) {
            var options = this.getOptions();
            if (options.externalComponents) {
                options.externalComponents.push(searchBoxRoot);
            }
            else {
                options.externalComponents = [searchBoxRoot];
            }
            Coveo.init(searchPageRoot, options);
        }
        else {
            Coveo.initSearchbox(searchBoxRoot, this.computeSearchPageUrl());
        }
    }
}
//# sourceMappingURL=CoveoForZendesk.js.map