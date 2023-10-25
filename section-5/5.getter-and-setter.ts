class User {
    _login: string; // underscore marks prop that it has implemented getter or setter
    password: string;
    createdAt: Date;

    // can't be async
    set login(login: string) { // removing setter will make _login readonly
        this._login = "user-" + login;
        this.createdAt = new Date(); // side effect
    }

    // can't be async
    get login(): string { // return type of getter connected to input type of setter
        return this._login
    }

    async getPassword() {
        return this.password;
    }

}

const user = new User();
user.login = "kowalski";
console.log(user);
console.log(user.login)

export {};
