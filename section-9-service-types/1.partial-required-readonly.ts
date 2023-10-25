interface User {
    name: string;
    age?: number;
    email: string;
}

type partialUser = Partial<User>; // makes all User field optional
const p: partialUser = {}; // empty object for Partial also valid


type requiredUser = Required<User>; // makes all User field required
type readonlyUser = Readonly<User> // makes all User field readonly
type requiredAndReadonly = Readonly<Required<User>> // makes all User field required and readonly


export {};