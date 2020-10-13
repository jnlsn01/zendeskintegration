import { InsightPanel } from "./components/InsightPanel/InsightPanel";
import { ZendeskClient } from "./zendesk/ZendeskClient/ZendeskClient";
import { TopBar } from "./components/TopBar/TopBar";
export function init(options) {
    var root = document.querySelector("#search");
    if (options.product == "support" && options.location.indexOf("ticket_sidebar") >= 0) {
        new InsightPanel(root, options, new ZendeskClient()).init(options.location != "new_ticket_sidebar");
    }
    else if (options.product == "support" && options.location == "top_bar") {
        new TopBar(root, options, new ZendeskClient()).init();
    }
}
//# sourceMappingURL=CoveoForZendesk.js.map