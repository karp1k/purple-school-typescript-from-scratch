abstract class DeliveryItem {
    items: DeliveryItem[] = [];

    addItem(item: DeliveryItem) {
        this.items.push(item);
    }

    getItemPrices(): number {
        return this.items.reduce((acc: number,
                                  item: DeliveryItem) =>
            acc + item.getPrice(), 0)
    }

    abstract getPrice(): number;
}

class DeliveryShop extends DeliveryItem {

    constructor(private deliveryFee: number) {
        super();
    }

    getPrice(): number {
        return this.getItemPrices() + this.deliveryFee;
    }
}

class Package extends DeliveryItem {


    getPrice(): number {
        return this.getItemPrices();
    }

}

class Product extends DeliveryItem {
    constructor(private price: number) {
        super();
    }

    getPrice(): number {
        return this.price;
    }

}

const shop = new DeliveryShop(100);

shop.addItem(new Product(1000));

const pack1 = new Package();
pack1.addItem(new Product(500))
pack1.addItem(new Product(200))

const pack2 = new Package();
pack2.addItem(new Product(300))

pack1.addItem(pack2);

shop.addItem(pack1);

console.log(shop.getPrice()) //should return 2100 -> 100 + 1000 + 500 + 200 + 300

export {};