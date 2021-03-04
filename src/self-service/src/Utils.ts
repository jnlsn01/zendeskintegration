import { ZendeskOptions } from "./models/ZendeskOptions";

export class Utils {

    public static async initCoveoSearchFromHtml(html: Promise<string>, parent: HTMLElement, options: ZendeskOptions): Promise<HTMLElement> {

        let root = html.then(html => {
            let htmlElement = this.stringToElement(html)
            htmlElement = parent.appendChild(htmlElement);
            let root = htmlElement.getElementsByClassName("CoveoSearchInterface")[0] as HTMLElement;

            if (!root)
                throw new Error("No CoveoSearchInterface found on coveo search page.")

            return root;
        })

        return this.coveoInit(root, options);
    }

    public static async coveoInit(root: Promise<HTMLElement> | HTMLElement, options: ZendeskOptions): Promise<HTMLElement> {
        root = (root instanceof Promise ? root : Promise.resolve(root)) as Promise<HTMLElement>;

        if (options.coveoBeforeInitialization)
            options.coveoBeforeInitialization(root, options);

        if (options.coveoInititialization)
            options.coveoInititialization(root, options);
        else
            Coveo.init(await root, options.searchOptions);

        if (options.coveoAfterInitialization)
            options.coveoAfterInitialization(await root, options);

        return root
    }

    public static stringToElement(str: string): HTMLElement {
        let parser = new DOMParser();
        let doc = parser.parseFromString(str, "text/html");
        return doc.body;
    }
}