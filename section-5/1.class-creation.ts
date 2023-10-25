class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const user = new User("Steve");
console.log(user);
user.name = "Bob";
console.log(user);

class Admin {
    role!: number; // (!) - lazy initialization,  drop assertions that props not initialized, another to avoid error could be config -  "strictPropertyInitialization": false
}

const admin = new Admin();
admin.role = 1;

export {};