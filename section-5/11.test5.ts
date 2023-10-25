class Product {
    constructor(public id: number, public name: string, public price: number) {};
}

interface Delivery {
    isValid(): boolean;
}

class HomeDelivery implements Delivery {
    date: Date;
    address: string;


    constructor(date: Date, address: string) {
        this.date = date;
        this.address = address;
    }

    isValid(): boolean {
        return !!this.date && !!this.address;
    }
}

class PointOfSaleDelivery implements Delivery {
    date: Date = new Date();
    id: number;

    constructor(id: number) {
        this.id = id;
    }

    isValid(): boolean {
        return !!this.date && !!this.id;
    }
}

class Cart {
    private products: Product[] = [];
    delivery?: Delivery;

    addProduct(p: Product) {
        this.products.push(p);
    }

    deleteProduct(id: number) {
        this.products = this.products.filter(p => p.id !== id)
    }

    totalPrice(): number {
        return this.products.reduce((sum, current) => sum + current.price, 0)
    }

    checkout(): boolean {
        return this.products.length > 0 && (this.delivery?.isValid() ?? false);
    }

}

const cart = new Cart();
console.log("add products...")
cart.addProduct(new Product(1, "bread", 2.5));
cart.addProduct(new Product(1, "cookes", 4.24));
console.log("checkout ", cart.checkout())
console.log("add delivery...")
cart.delivery = new PointOfSaleDelivery(25);
console.log("total price: ", cart.totalPrice())
console.log("checkout ", cart.checkout())
console.log("delete products...")
cart.deleteProduct(1);
cart.deleteProduct(2);
console.log("checkout ", cart.checkout())


export {};