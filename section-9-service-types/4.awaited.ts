type A = Awaited<Promise<string>>; // A would be "string
type A2 = Awaited<Promise<Promise<string>>>; // A2 still "string"

interface IMenu {
    name: string;
    url: string;
}

async function getMenu(): Promise<IMenu[]> {
    return [{name: "Main", url: "/"}];
}

type R = Awaited<ReturnType<typeof getMenu>>; // R is a IMenu[]

async function getArray<T>(x: T) { // return type Promise<Awaited<T>[]>
    return [await x];
}



export {}