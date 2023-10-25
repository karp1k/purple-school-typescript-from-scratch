class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Users extends Array<User> { // inheritance example - not a good idea  mixing business with utils

    searchByName(name: string) {
        return this.filter(u => u.name === name);
    }


    override toString(): string {
        return this.map(u => u.name).join(", ");
    }
}

const users = new Users();
users.push(new User("Bob"));
users.push(new User("Mark"))
console.log(users.toString());

class UserList { // composition
    users: User[] = [];

     push(u: User) {
         this.users.push(u);
     }
}

class Payment { // one domain area
    date: Date;
}

 class UserWithPayment extends Payment { // bad - user another domain area that doesn't have straight connection to Payment
    name: string;
 }

 class UserWithPaymentComposition { // composition helps to handle different domain areas
    user: User;
    payment: Payment;

     constructor(user: User, payment: Payment) {
         this.user = user;
         this.payment = payment;
     }
 }

export {};