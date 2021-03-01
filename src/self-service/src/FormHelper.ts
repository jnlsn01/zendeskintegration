export class FormHelper {

    private form: HTMLFormElement;

    constructor(formId: string) {
        this.form = document.querySelector(`form#${formId}`) as HTMLFormElement;
        if (!this.form) {
            throw Error(`Form with id '${formId}' not found in page`);
        }
    }

    public onChange(callback: (formValues: { [key: string]: string }) => void) {
        if (!this.form) return;

        this.form.addEventListener('input', (e) => {
            callback(this.values());
        });
    }

    public values(): { [key: string]: string } {
        let formData = new FormData(this.form);
        let formValues: { [key: string]: string } = {};
        formData.forEach((value, key) => {
            if (_.isString(value)) {
                let formatedKey = this.formatKey(key)
                if (formatedKey)
                    formValues[this.formatKey(key)] = value;
            }
        });

        return formValues;
    }

    //Formats keys (request[name] -> name)
    private formatKey(key: string): string | undefined {
        var matches = key.match(/\[(.*?)\]/);
        return matches ? matches[1] : undefined;
    }
}