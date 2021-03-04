import { ZendeskOptions } from "./models/ZendeskOptions";

export class Utils {

    public static async initCoveoSearchFromHtml(html: Promise<string>, parent: HTMLElement, options: ZendeskOptions): Promise<void> {

        let root = html.then(html => {
            let htmlElement = this.stringToElement(html)
            htmlElement = parent.appendChild(htmlElement);
            let root = htmlElement.getElementsByClassName("CoveoSearchInterface")[0] as HTMLElement;

            if (!root)
                throw new Error("No CoveoSearchInterface found on coveo search page.")

            return root;
        })

        this.coveoInit(root, options);
    }

    public static async coveoInit(root: Promise<HTMLElement> | HTMLElement, options: ZendeskOptions): Promise<void> {
        root = (root instanceof Promise ? root : Promise.resolve(root)) as Promise<HTMLElement>;

        if (options.coveoInit)
            options.coveoInit(root, options);
        else
            Coveo.init(await root, options.searchOptions);
    }

    public static stringToElement(str: string): HTMLElement {
        let parser = new DOMParser();
        let doc = parser.parseFromString(str, "text/html");
        return doc.body;
    }
}