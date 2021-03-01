import { FormHelper } from "../FormHelper";
import { C4ZDComponent } from "./C4ZDComponent";
import templateSearchInterface from '../templates/CaseDeflection.html';
import { ZendeskOptions } from "../Index";
import { Utils } from "../Utils";

/**
 * Case deflection that will execute search queries on the CoveoSearchInterface child of this element.
 * If no CoveoSearchInterface is found, a default search interface will be initialized
 * Exemple: <CoveoCaseDeflection data-throttle-time=750 data-form-id=new_request/>
 *          or <CoveoCaseDeflection> <CoveoHostedSearchPage data-page-name="pageName"/> </CoveoCaseDeflection>
 * 
 * Attributes:
 * data-throttle-time <Optional default=1000>: Throttle time between search queries
 * data-form-id <Optional default=new_request>: id of the form that will be used for the case deflection
 */
export class CaseDeflection implements C4ZDComponent {
    tag: string = "CoveoCaseDeflection";

    public async init(element: HTMLElement, options: ZendeskOptions): Promise<void> {

        let throttleTimeStr = element.dataset.throttleTime;
        let throttleTime = throttleTimeStr ? parseInt(throttleTimeStr) : 1000;

        let formId = element.dataset.formId ?? 'new_request';

        let root = element.getElementsByClassName(
            "CoveoSearchInterface"
        )[0] as HTMLElement;

        if (!root) {
            //If no CoveoSearchInterface was specified, we use the template.
            root = Utils.initCoveoSearchFromHtml(templateSearchInterface, element, options.searchOptions);
        }

        let throttledQueryExec = _.throttle(() => {
            Coveo.logSearchEvent(root, {
                name: 'CaseInputChange',
                type: 'Search'
            }, {});

            Coveo.executeQuery(root);
        }, throttleTime);

        let form = new FormHelper(formId);

        Coveo.$$(root).on(Coveo.InitializationEvents.afterInitialization, () => {
            Coveo.$$(root).on(Coveo.QueryEvents.buildingQuery, (_event, args) => {
                //TODO add user context?
                args.queryBuilder.addContext(form.values());
            });

            form.onChange(() => throttledQueryExec());
        });
    }
}