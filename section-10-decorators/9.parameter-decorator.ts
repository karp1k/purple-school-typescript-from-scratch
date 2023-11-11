
interface IUserService {

    getUserInDatabase(): number;
}

class UserService implements IUserService {
    private _users: number;

    constructor(public url: string) {
    }

    getUserInDatabase(): number {
       return this._users;
    }

    setUserInDatabase(@Positive() num: number): void {
        this._users = num;
    }
}

function Positive() {
    return (target: Object, propertyKey: string | symbol,  parameterIndex: number) => {
        console.log(target)
        console.log(propertyKey)
        console.log(parameterIndex)
    }
}

const us = new UserService("https://google.com");
console.log(us);
export {}