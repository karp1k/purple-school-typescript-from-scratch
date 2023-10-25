class UserBuilder {
    name: string;

    setName(name: string): this {
        this.name = name;
        return this;
    }

    isAdmin(): this is AdminBuilder { // typeguard
        return this instanceof AdminBuilder;
    }
}

class AdminBuilder extends UserBuilder {
    roles: string[];
}

const res = new UserBuilder().setName("Roxy");
const res2 = new AdminBuilder().setName("Max"); // setName return "this"

let user: UserBuilder | AdminBuilder = new UserBuilder();

if (user.isAdmin()) {
    console.log(user);
} else {
    console.log(user);
}

export {};