
interface PaymentApi {
    getPaymentDetails(id: number): PaymentDetail | undefined
}

interface PaymentDetail {
    id: number;
    sum: number;
}

class PaymentApiImpl implements PaymentApi {
    private data: Map<number, PaymentDetail> = new Map();

    constructor() {
        this.data.set(1, {id: 1, sum: 1000});
    }

    getPaymentDetails(id: number): PaymentDetail | undefined {
        return this.data.get(id);
    }

}

class PaymentAccessProxy implements PaymentApi{
    constructor(private api: PaymentApi, private userId: number) {
    }

    getPaymentDetails(id: number): PaymentDetail | undefined {
        if (this.userId == 1) {
            return this.api.getPaymentDetails(id);
        } else {
            console.log(`wrong user: ${this.userId}`)
            return undefined;
        }
    }


}

const apiProxy1 = new PaymentAccessProxy(new PaymentApiImpl(), 1);
console.log(apiProxy1.getPaymentDetails(1));
const apiProxy2 = new PaymentAccessProxy(new PaymentApiImpl(), 2);
console.log(apiProxy2.getPaymentDetails(1));

export {};