type httpMethod = "post" | "get"; // squash string type

type coolString = string; // just alias for string type

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
    return 1;
}

type User = {
    name: string,
    age: number,
    skills: string[]
}

type Role = {
    id: number,
    name: string
}

type UserWithRole = User & Role; // intersection of types (&). union (|)
type UserComposition = { // composition is better when combining types has identical params e.g. User and Role param - name
    user: User,
    role: Role
}

let user: UserWithRole = {
    id: 1,
    name: "some",
    age: 33,
    skills: ["1", "2"]
};



export {};