class User {
    constructor(public id: number, public name: string) {
    }
}

function getData(id: number): User {
    return new User(id, "Steve");
}

type RT = ReturnType<typeof getData> // RT would be User

type PT = Parameters<typeof getData> // return array of parameters [id: number]
type first = PT[0]; // would be number;

type CP = ConstructorParameters<typeof User> // return array of constructor parameters of User class

type IT = InstanceType<typeof User> //return User as type

export {}