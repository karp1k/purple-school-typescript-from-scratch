class Notify {
    send(template: string, to: string) {
        console.log(`send template: ${template} -> ${to}`)
    }
}

class Log {
    log(message: string) {
        console.log(message);
    }
}

class Template {
    private template = [
        {name: "someName", template: "<h2>some template</h2>"}
    ];

    getByName(name: string) {
        return this.template.find(t => t.name === name);
    }
}

class NotificationFacade {
    private notify = new Notify()
    private logger = new Log();
    private template = new Template();

    send(to: string, templateName: string) {
        const data = this.template.getByName(templateName);
        if (!data) {
            this.logger.log("Template not found");
            return;
        }
        this.notify.send(data.template, to);
    }
}

const facade = new NotificationFacade();
facade.send("Bob", "someName");
facade.send("Bob", "wrongName");

export {};