import PlatformClient from "@coveord/platform-client";
import { ZendeskOptions } from "../Index";
import { Utils } from "../Utils";
import { C4ZComponent } from "./C4ZComponent";

/**
 * Adds the hosted search page specified by data-page-name as a child of this element
 * Exemple: <CoveoHostedSearchPage data-page-name='myPageName'/>
 * 
 * Attributes:
 * data-page-name <Required>: the name of the hosted search page to be fetched.
 */
export class CoveoHostedSearchPage implements C4ZComponent {
    tag: string = "CoveoHostedSearchPage";

    public async init(element: HTMLElement, options: ZendeskOptions): Promise<void> {
        let pageName = element.dataset.pageName;

        if (!pageName) {
            throw Error("'data-page-name' attribute need to be specified");
        }

        let platform = new PlatformClient({
            organizationId: options.organizationId,
            accessToken: options.APIKey,
        });

        //Fetch the search page with the page name
        let hostedPage = (await platform.searchPages.list({ name: pageName }))[0];

        if (!(hostedPage && hostedPage.html)) {
            throw Error(`No hosted search page found with the name ${pageName}`)
        }

        Utils.initCoveoSearchFromHtml(hostedPage.html, element, options.searchOptions);
    }
}
