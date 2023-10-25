interface User {
    name: string
}

interface User {
    age: number
}

const user: User = { // merge of 2 interfaces
    name: "aa",
    age: 22
}

// merge helps then you have interface from external library


type User2 = {
    name: string
}

// types useful with unions or intersections of primitive types - number, string ...etc

// type User2 = { // error type can't be merged
//     id: number;
// }

export {};