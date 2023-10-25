enum PaymentStatus {
    HOLDED,
    PROCCESD,
    REVERSED
}
class Payment {
    id: number;
    status: PaymentStatus = PaymentStatus.HOLDED;
    createdAt: Date = new Date();
    updatedAt: Date;

     constructor(id: number) {
         this.id = id;
     }

     getPaymentLifeTime(): number {
         return new Date().getTime() - this.createdAt.getTime();
     }

     unholdPayment() {
         if (this.status === PaymentStatus.PROCCESD) {
             throw new Error("Payment can't be returned.")
         }
         this.status = PaymentStatus.REVERSED;
         this.updatedAt = new Date();
     }
}

const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(time);


export {};
