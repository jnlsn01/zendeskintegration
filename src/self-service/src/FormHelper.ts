export class FormHelper {
    //Meta fields used by zendesk that we ignore for the search and ua.
    private ignoreFields = ["ticket_form_id", "description_mimetype"];

    private form: HTMLFormElement;

    constructor(formId: string) {
        this.form = document.querySelector(`form#${formId}`) as HTMLFormElement;
        if (!this.form) {
            throw Error(`Form with id '${formId}' not found in page`);
        }
    }

    public onChange(callback: (formValues: { [key: string]: string }) => void) {
        if (!this.form) return;

        this.form.addEventListener("input", (e) => {
            callback(this.values());
        });
    }

    public values(): { [key: string]: string } {
        let formData = new FormData(this.form);
        let formValues: { [key: string]: string } = {};
        formData.forEach((value, key) => {
            if (_.isString(value)) {
                let formatedKey = this.formatKey(key);
                if (formatedKey && !this.ignoreFields.includes(formatedKey))
                    formValues[this.formatKey(key)] = value;
            }
        });

        return formValues;
    }

    public onSubmit(callback: (event: MouseEvent) => void) {
        let submit = this.form.querySelector(`input[type=submit]`);
        if (submit) submit.addEventListener("click", callback);
    }

    //Formats keys (request[name] -> name)
    private formatKey(key: string): string | undefined {
        var matches = key.match(/\[(.*?)\]/);
        return matches ? matches[1] : undefined;
    }
}
