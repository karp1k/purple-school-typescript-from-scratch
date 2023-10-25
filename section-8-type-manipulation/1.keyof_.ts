interface User {
    name: string;
    age: number;
}

type KeysOfUser = keyof User;

// keyof return object keys

const key: KeysOfUser = "name" // only "name" or "age"

function getValue<T, K extends keyof T>(o: T, key: K) {
    return o[key];
}

const user: User = {
    name: "Mark",
    age: 30
}

const userName = getValue(user, "name")

export {};