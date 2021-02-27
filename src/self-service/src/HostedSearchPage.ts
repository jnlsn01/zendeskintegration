import { ZendeskOptions } from "./Index";
import PlatformClient from "@coveord/platform-client";

export class CoveoHostedSearchPage {
    private static readonly tagName = "CoveoHostedSearchPage";
    private static readonly pageNameAttribute = "page-name";

    /**
     * Replaces CoveoHostedSearchPage components with their specified hosted search page
     */
    public static initializeHostedSearchPages(
        options: ZendeskOptions,
        searchOptions: any
    ): void {
        let hostedPageElements = document.getElementsByTagName(this.tagName);

        for (var i = 0; i < hostedPageElements.length; i++) {
            this.initializeHostedSearchPage(
                hostedPageElements[i],
                options,
                searchOptions
            );
        }
    }

    /**
     * Replaces a CoveoHostedSearchPage components with the hosted search page specified by page-name
     * Exemple: <CoveoHostedSearchPage page-name='myPageName'/>
     */
    public static initializeHostedSearchPage(
        hostedSearchPageElem: Element,
        options: ZendeskOptions,
        searchOptions: any
    ) {
        let pageName = hostedSearchPageElem.getAttribute(this.pageNameAttribute);
        if (pageName) {
            let platform = new PlatformClient({
                organizationId: options.organizationId,
                accessToken: options.APIKey,
            });

            //Fetch the search page with the page name
            platform.searchPages.list({ name: pageName }).then((hostedPages) => {
                let hostedPage = hostedPages[0];

                if (hostedPage && hostedPage.html) {
                    let hostedPageHtml = this.stringToElement(hostedPage.html);
                    let templateElement = hostedSearchPageElem.appendChild(
                        hostedPageHtml
                    );

                    let root = templateElement.getElementsByClassName(
                        "CoveoSearchInterface"
                    )[0];

                    if (root) Coveo.init(root as HTMLElement, searchOptions);
                } else {
                    console.warn(`No hosted search page found with the name ${pageName}`);
                }
            });
        } else {
            console.warn(
                "'page-name' attribute need to be specified on CoveoHostedSearchPage"
            );
        }
    }

    private static stringToElement(str: string): HTMLElement {
        let parser = new DOMParser();
        let doc = parser.parseFromString(str, "text/html");
        return doc.body;
    }
}
