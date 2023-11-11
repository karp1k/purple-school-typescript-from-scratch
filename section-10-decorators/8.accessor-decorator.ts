
interface IUserService {

    getUserInDatabase(): number;
}

class UserService implements IUserService {
    private _users: number;

    set users(num: number) {
        this._users = num;
    }

    @LogAccess()
    get users() {
        return this._users;
    }

    constructor(public url: string) {
    }

    getUserInDatabase(): number {
        throw new Error("some error inside getUserInDatabase")
       // return this.users;
    }
}

function LogAccess() {
    return (target: Object, propertyKey: string | symbol,  descriptor: PropertyDescriptor) => {
        const oldSet = descriptor.set;
        descriptor.set = function (...args) {
            console.log(`set new value for users: ${args}`)
            oldSet?.apply(this, args);
        }
        return descriptor;
    }
}

const us = new UserService("https://google.com");
us.users = 100;
us.users = 250;
console.log(us);
export {}