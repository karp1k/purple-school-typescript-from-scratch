interface IUserService {
    users: number;
    getUserInDatabase(): number;
}

// init order from top to down: log, setUsersAdvanced
// execute order from down to top (!): setUsersAdvanced, log || like log(setUsersAdvanced(obj))
@log()
@setUsersAdvanced(15)
class UserService implements IUserService {
    users: number = 1000;

    constructor(public url: string) {
    }

    getUserInDatabase(): number {
        return this.users;
    }
}

function log() {
    console.log("log init");
    return (target: Function) => {
        console.log("log run")
    }
}

function setUsersAdvanced(users: number) {
    console.log("setUsersAdvanced init")
    return <T extends {new(...args: any[]): {}}>(constructor: T) => {
        console.log("setUsersAdvanced run")
        return class extends constructor {
            users = users
        }
    }

}

console.log(new UserService("https://localhost:8083/users").getUserInDatabase())

export {}