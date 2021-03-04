import { FormHelper } from "../FormHelper";
import { C4ZDComponent } from "./C4ZDComponent";
import templateSearchInterface from '../templates/CaseDeflection.html';
import { ZendeskOptions } from "../Index";
import { Utils } from "../Utils";
import coveoua from 'coveo.analytics';

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
export class CoveoCaseDeflection implements C4ZDComponent {
    tag: string = "CoveoCaseDeflection";

    private ticketCreated = false;

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

        coveoua("init", options.APIKey);

        let throttledQueryExec = _.throttle(() => {
            //Send Start creating ticket analytics event
            coveoua('svc:setAction', 'ticket_field_updated');
            coveoua('svc:setTicket', form.values());
            coveoua("send", "event");

            Coveo.logSearchEvent(root, {
                name: 'CaseInputChange',
                type: 'Search'
            }, {});

            Coveo.executeQuery(root);
        }, throttleTime);

        let form = new FormHelper(formId);



        Coveo.$$(root).on(Coveo.InitializationEvents.afterInitialization, () => {
            Coveo.$$(root).on(Coveo.QueryEvents.buildingQuery, (_event, args) => {
                args.queryBuilder.addContext(form.values());
            });

            form.onChange(() => throttledQueryExec());
        });

        //Send ticket create analytics event when on submit button is clicked
        //This isn't perfect because when there are missing fields, the ticket is not actually created
        //and the page is reloaded so we send another ticket_create_start event. Not sure if we can fix this atm tbh
        form.onSubmit(() => {
            coveoua("svc:setAction", "ticket_create");
            coveoua('svc:setTicket', form.values());
            coveoua("send", "event");
            this.ticketCreated = true;
        })

        //Send ticket cancel event when we leave the page before submiting the ticket.
        window.onbeforeunload = () => {
            if (!this.ticketCreated) {
                coveoua("svc:setAction", "ticket_cancel");
                coveoua('svc:setTicket', form.values());
                coveoua("send", "event");
            }
        }

        //Send Start creating ticket analytics event
        coveoua("svc:setAction", "ticket_create_start");
        coveoua('svc:setTicket', form.values());
        coveoua("send", "pageview");
    }
}