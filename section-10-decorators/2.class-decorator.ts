interface IUserService {
    users: number;
    getUserInDatabase(): number;
}

@nullUser
@threeUserAdvanced
class UserService implements IUserService {
    users: number = 1000;

    constructor(public url: string) {
    }

    getUserInDatabase(): number {
        return this.users;
    }
}

// set users to 0 BEFORE init real object hence after instanced UserService it override ZERO from decorator to number from declaration = 1000
function nullUser(target: Function) {
    target.prototype.users = 0;
}

// set users to 3 correctly because it makes new instance from another class instance
function threeUserAdvanced<T extends {new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        users = 3
    }
}

console.log(new UserService("https://localhost:8083/users").getUserInDatabase())

export {}