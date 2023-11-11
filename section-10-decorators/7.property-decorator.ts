
interface IUserService {
    users: number;

    getUserInDatabase(): number;
}

class UserService implements IUserService {
    @Max(100)
    users: number = 1000;

    constructor(public url: string) {
    }

    getUserInDatabase(): number {
        throw new Error("some error inside getUserInDatabase")
       // return this.users;
    }
}

function Max(maxNumber: number) {
    // target - class
    // propertyKey - class arg - users
    return (target: Object, propertyKey: string | symbol) => {
        let value: number;
        const setter = function (newValue: number) {
            if (newValue > maxNumber) {
                console.log(`Value must be less then ${maxNumber}`)
            } else {
                value = newValue;
            }
        }

        const getter = function () {
            return value;
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    }
}

const us = new UserService("https://google.com");
console.log(us.users)
us.users = 50;
console.log(us.users)

export {}