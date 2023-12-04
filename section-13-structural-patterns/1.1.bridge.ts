interface Provider<T> {
    sendMessage(message: string): void;
    connect(config: T): void;
    disconnect(): void;
}

class TelegramProvider implements Provider<string> {

    disconnect(): void {
        console.log('disconnect TG')
    }

    sendMessage(message: string): void {
        console.log(message);
    }

    connect(config: string): void {
        console.log(config);
    }

}

type WhatsUpConfig = {
    address: string;
    username: string;
    password: number;
}

class WhatsUpProvider<T> implements Provider<WhatsUpConfig> {
    connect(config: WhatsUpConfig): void {
        console.log(config);
    }

    disconnect(): void {
        console.log("disconnect from WhatsUp");
    }

    sendMessage(message: string): void {
        console.log(message);
    }

}


class NotificationSender {
    constructor(private provider: Provider<any>) {
    }

    send() {
        this.provider.connect("connect");
        this.provider.sendMessage("message");
        this.provider.disconnect();
    }
}

const sender = new NotificationSender(new TelegramProvider());
sender.send();
const sender2 = new NotificationSender(new WhatsUpProvider());
sender2.send();

export {};