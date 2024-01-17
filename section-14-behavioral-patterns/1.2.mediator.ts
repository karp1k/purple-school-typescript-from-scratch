export {};

interface Mediator {
    notify(sender: string, event: string);
}

abstract class Mediated {

    protected mediator: Mediator;

    setMediator(mediator: Mediator) {
        this.mediator = mediator;
    }

}

class Notifications {
    notify() {
        console.log("Notify sent.")
    }
}

class Log {
    log(message: string) {
        console.log(message);
    }
}

class EventHandler extends Mediated {
    onMyEvent() {
        this.mediator.notify("EventHandler", "myEvent");
    }
}

class SimpleMediator implements Mediator {

    constructor(public notifications: Notifications,
                public logger: Log,
                public eventHandler: EventHandler) {
    }

    notify(sender: string, event: string) {
        if (event === "myEvent") {
            this.notifications.notify();
            this.logger.log("send");
        }

    }

}

const handler = new EventHandler();
const notifications = new Notifications();
const logger = new Log();

const mediator = new SimpleMediator(notifications, logger, handler);
handler.setMediator(mediator);

handler.onMyEvent();