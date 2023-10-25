class Payment {
    private date: Date = new Date();

    getDate(this: Payment) { // losing context with common function
        return this.date;
    }

    getDateArrow = () => {
        return this.date
    }

}

const p = new Payment();


const user = {
    id: 1,
    paymentDate: p.getDate(),
    paymentDateArrow: p.getDateArrow()
}
console.log(p.getDate());
console.log(user.paymentDateArrow);
console.log(user.paymentDate);

class PaymentPersistent extends Payment {
    save() {
        // return super.getDateArrow(); throw exception not allowed to call through "super" arrow functions use "this"
        return this.getDateArrow();
    }
}

console.log(new PaymentPersistent().save())

export {};