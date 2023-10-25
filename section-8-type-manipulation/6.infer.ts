function runTransaction(transaction: {
    fromTo: [string, string]
}) {
    console.log();
}

const transaction = {
    fromTo: ["1", "2"] as [string, string] // straight solution
}

runTransaction(transaction);

type GetFirstAr<T> = T extends (first: infer First, ...args: any[]) => any ? First : never;
// "infer" extract argument types

const transaction2: GetFirstAr<typeof runTransaction> = {
    fromTo: ["4", "5"]
}

runTransaction(transaction2);

export {};