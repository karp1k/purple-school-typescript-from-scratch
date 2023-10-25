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
function logId(id: string | number) {
    if (typeGuardIsString(id)) {
        console.log(id); // string
    }  else {
        console.log(id); // number
    }
}

function typeGuardIsString(x: string | number): x is string {
    return x === "string";
}

function typeGuardIsAdmin(user: User | Admin): user is Admin {
    return 'role' in user;
}

function typeGuardIsAdminAlternative(user: User | Admin): user is Admin {
    return (user as Admin).role !== undefined;
}

function setRole(user: User | Admin) {
    if (typeGuardIsAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error("User is not the admin")
    }
}

export {};