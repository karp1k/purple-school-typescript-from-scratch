export {};

class Lead {
    constructor(public name: string, public phone: string) {
    }
}

interface Observer {

    onLeadArrivedEvent(lead: Lead);
}

class LeadArrivedEvent {

    private subscribers: Observer[] = []

    public attach(o: Observer) {
        if (!this.subscribers.includes(o)) {
            this.subscribers.push(o);
        }
    }

    public detach(o: Observer) {
        const i = this.subscribers.indexOf(o);
        if (i != -1) {
            this.subscribers.splice(i, 1);
        }
    }

    public notify(lead: Lead) {
        this.subscribers.forEach(subscriber => {
            subscriber.onLeadArrivedEvent(lead);
        })
    }

}

class NotificationService implements Observer {

    onLeadArrivedEvent(lead: Lead) {
        console.log("Send notification: new lead arrived.")
    }

}

class LeadService implements Observer {

    onLeadArrivedEvent(lead: Lead) {
        console.log("saving new lead...")
    }

}

const lead = new Lead("Steve", "01928394");
const event = new LeadArrivedEvent();
const subscriber1 = new NotificationService();
const subscriber2 = new LeadService();
event.attach(subscriber1);
event.attach(subscriber2);
event.notify(lead);
event.detach(subscriber1);
console.log("after detach =====")
event.notify(lead);