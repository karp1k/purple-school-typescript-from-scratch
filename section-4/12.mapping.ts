let a = 5;
let b: string = a.toString();
let e: string = new String(a).valueOf();
let f: boolean = new Boolean(a).valueOf();

let c = 'abcd';
let d: number = +c; // NaN

interface User {
    name: string;
    email: string;
    login: string;
}

const user: User = {
    name: "Steve",
    email: "steve@mail.com",
    login: "steve12"
}

interface Admin {
    name: string;
    role: number;
}

const admin: Admin = {
    ...user,
    role: 1
} // not casting! - creating new object

// mapping
function userToAdmin(user: User): Admin {
    return {
        name: user.name,
        role: 1
    }
}


export {};