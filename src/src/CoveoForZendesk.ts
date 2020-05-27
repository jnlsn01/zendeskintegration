import { ZendeskOptions } from "./models/ZendeskOptions";
import { InsightPanel } from "./components/InsightPanel/InsightPanel";
import { ZendeskClient } from "./zendesk/ZendeskClient/ZendeskClient";


export function init(options: ZendeskOptions) {
    var root = <HTMLElement>document.querySelector("#search");
    if (options.product == "support" && options.location == "ticket_sidebar") {
        new InsightPanel(root, options, new ZendeskClient()).init();
    }
}
