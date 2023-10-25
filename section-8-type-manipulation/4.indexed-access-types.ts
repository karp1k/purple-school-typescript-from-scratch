interface Role {
    name: string;
}


interface Permission {
    endDate: Date;
}

interface User {
    name: string;
    roles: Role[];
    permission: Permission;
}

const u: User = {
    name: "Ron",
    roles: [{name: "admin"}],
    permission: {endDate: new Date()}
}

const userName = u["name"] // access field through index
const roleNames = "roles";

type roleTypes = User["roles"]; // :Role[]
// type roleTypes3 = User[roleNames] will not work
type roleTypes2 = User[typeof roleNames];

type roleType = User["roles"][number]; // like calling object = user["roles][0]

const roles = ["admin", "user", "super-user"] as const; // roles would by readonly
type roleTypes4 = typeof roles[number]; // union of each string inside array roles


type dateType = User["permission"]["endDate"];


export {};