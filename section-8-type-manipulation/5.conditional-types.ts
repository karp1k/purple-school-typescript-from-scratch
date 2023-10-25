const a: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResponse<T extends "success" | "failed"> {
    code: number;
    data: T extends "success" ? string : Error;
}

const r1: HTTPResponse<"success"> = {
    code: 200,
    data: "done"
}

const r2: HTTPResponse<"failed"> = {
    code: 500,
    data: new Error()
}

class User {
    id: number;
    name: string;
}

class UserPersistend extends User {
    dbId: string;
}

// function getUser(id: number): User;
// function getUser(dbId: string): UserPersistend;
function getUser(dbIdOrId: string | number): User | UserPersistend {
    if (typeof dbIdOrId === "number") {
        return new User();
    } else {
        return new UserPersistend();
    }
}

getUser(1)
getUser("bbf")

type UserOrUserPersistend<T extends string | number> = T extends number ? User : UserPersistend; // replace function overloading

function getUser2<T extends string | number>(id: T): UserOrUserPersistend<T> {
    if (typeof id === "number") {
        return new User() as UserOrUserPersistend<T>;
    } else {
        return new UserPersistend();
    }
}

getUser(1) // return type User | UserPersistend
getUser2(1); // return type User
getUser2("b"); // return type UserPersistend

export {};