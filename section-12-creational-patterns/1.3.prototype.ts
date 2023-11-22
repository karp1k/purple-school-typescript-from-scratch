interface Prototype<T> {
    clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
    createdAt: Date;
    constructor(public email: string, public name: string) {
        this.createdAt = new Date();
    }

    clone(): UserHistory {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }

}

const uh1 = new UserHistory("a@mail.com", "Jeff");
const uh2 = uh1.clone();

console.log(uh1)
console.log(uh2)
uh2.email = "b@mail.com";
console.log(uh2);

export {};