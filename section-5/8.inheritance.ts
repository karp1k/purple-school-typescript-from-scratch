type PaymentStatus = "new" | "paid";

class Payment {
    id: number;
    status: PaymentStatus = "new";

    constructor(id: number) {
        this.id = id;
    }

    pay() {
        this.status = "paid";
    }
}

class PersistedPayment extends Payment {
    databaseId: number;
    paidAt: Date;

     constructor() {
         super(Math.random());
     }

     save() {
         // save to db
     }

    override pay(date?: Date) { // override mark keyword, saves from deleting overrided method from parent
         super.pay();
         if (date) {
             this.paidAt = date;
         }
    }
}

class User {
    name: string = "user";

    constructor() {
        console.log(this.name) // show "user"
    }
}

class Admin extends User {
    name: string = "admin;"
}

new Admin(); // show "user"

// Admin extends User -> User and hist props will be initialized first and only after his successor Admin

class HttpError extends Error {
    code: number;

    constructor(message: string, code?: number) {
        super(message);
        this.code = code ?? 500;
    }
}

export {};