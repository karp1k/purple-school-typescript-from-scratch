/*
    Create decorator, that add property createdAt to the class
    and store creation date
 */

interface IUserService {
    users: number;
    getUserInDatabase(): number;
}

@CreatedAt
class UserService implements IUserService {
    users: number = 1000;
    constructor(public url: string) {
    }

    getUserInDatabase(): number {
        return this.users;
    }
}

function CreatedAt<T extends {new (...args: any[]): {}}>(target: T) {
    return class extends target {
        createdAt = new Date();
    }
}

type CreatedAt = {
    createdAt: Date;
}

console.log((new UserService("some url") as unknown as IUserService & CreatedAt).createdAt);
export {}