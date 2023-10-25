interface User {
    name: string,
    age: number,
    skills: string[]
    log: (id: number) => string;
}

type User2 = {
    name: string,
    age: number,
    skills: string[]
    log: (id: number) => string;
}


interface Role {
    roleId: number;
}

interface UserWithRole extends User, Role {
    createdAt: Date
}

let user: UserWithRole = {
    name: "some",
    age: 33,
    skills: ["1", "2"],
    roleId: 1,
    createdAt: new Date(),
    log(id) {
        return ""
    }
};

interface UserDictionary {
    [index: number]: User // key is a number, value is a User
}

type UserDictionary2 = {
    [index: number]: User // key is a number, value is a User
}

type ud = Record<number, User>

export {};