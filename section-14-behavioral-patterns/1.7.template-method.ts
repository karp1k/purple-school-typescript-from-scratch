export {};


class Form {
    constructor(public name: string) {
    }
}

abstract class SaveForm<T> {

    public save(form: Form) {
        const data = this.fill(form);
        this.log(data);
        this.send(data);
    }

    abstract fill(form: Form): T;
    abstract log(data: T): void;
    abstract send(data: T): void;
}

class Api1SaveForm extends SaveForm<string> {

    fill(form: Form): string {
        return form.name;
    }

    log(data: string): void {
        console.log("Data to save into api1: " + data);
    }

    send(data: string): void {
        console.log("Data send to api1: " + data);
    }

}

class Api2SaveForm extends SaveForm<{ payload: string }> {

    fill(form: Form): { payload: string } {
        return {payload: form.name};
    }

    log(data: { payload: string }): void {
        console.log(`Data to save into api2 ${JSON.stringify(data)}`);
    }

    send(data: { payload: string }): void {
        console.log(`Data send to api2 ${JSON.stringify(data)}`);
    }

}

const form = new Form("registration form");
const api1SaveForm = new Api1SaveForm();
const api2SaveForm = new Api2SaveForm();

api1SaveForm.save(form);
api2SaveForm.save(form);