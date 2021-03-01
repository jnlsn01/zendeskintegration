export class Utils {

    public static initCoveoSearchFromHtml(html: string, parent: HTMLElement, searchOptions: any): HTMLElement {

        let hostedPageHtml = this.stringToElement(html);
        let templateElement = parent.appendChild(
            hostedPageHtml
        );

        let root = templateElement.getElementsByClassName(
            "CoveoSearchInterface"
        )[0] as HTMLElement;

        if (root) Coveo.init(root, searchOptions);
        return root;
    }

    public static stringToElement(str: string): HTMLElement {
        let parser = new DOMParser();
        let doc = parser.parseFromString(str, "text/html");
        return doc.body;
    }
}