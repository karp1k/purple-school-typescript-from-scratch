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


export {};