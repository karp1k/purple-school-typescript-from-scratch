interface ILogger {
    log(...args): void;

    error(...args): void;
}

class ConsoleLogger implements ILogger {

    async error(...args): Promise<void> {
        // sent to external service
        console.log(...args);
    }

    log(...args): void {
        console.log(...args);
    }

}


interface IPayable {

    pay(paymentId: number): void;
    price?: number; // optional wouldn't be presented in the implementation

}

interface IDeletable {
    delete(): void;
}

class User implements IPayable, IDeletable {
    pay(paymentId: number |string): void { // prop type should be exact as in the interface or wider
        // ----
    }

    delete(): void {
        // -----
    }
}

const user = new User();



export {};
