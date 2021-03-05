import { SearchPageModel } from "@coveord/platform-client";
import { ZendeskOptions } from "../Index";
import { Utils } from "../Utils";
import { C4ZDComponent } from "./C4ZDComponent";

/**
 * Adds the hosted search page specified by data-page-name as a child of this element
 * Exemple: <CoveoHostedSearchPage data-page-name='myPageName'/>
 * 
 * Attributes:
 * data-page-name <Required>: the name of the hosted search page to be fetched.
 */
export class CoveoHostedSearchPage implements C4ZDComponent {
    tag: string = "CoveoHostedSearchPage";

    public async init(element: HTMLElement, options: ZendeskOptions): Promise<void> {
        let pageName = element.dataset.pageName;

        if (!pageName) {
            throw Error("'data-page-name' attribute need to be specified");
        }

        //Fetch the search page with the page name
        let hostedPageHtml = this.fetchHostedSearchPage(options.APIKey, options.organizationId, pageName).then(hostedSearchPages => {
            let hostedPage = hostedSearchPages[0];

            if (!(hostedPage && hostedPage.html))
                throw Error(`No hosted search page found with the name ${pageName}`)

            return hostedPage.html;
        });

        await Utils.initCoveoSearchFromHtml(hostedPageHtml, element, options);
    }

    private async fetchHostedSearchPage(token: string, orgId: string, pageName: string): Promise<SearchPageModel[]> {
        let endpoint = `https://platform.cloud.coveo.com/rest/organizations/${orgId}/pages?name=${pageName}`;
        let result = await fetch(endpoint, {
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
            }),
        })

        return await result.json() as SearchPageModel[];
    }
}
