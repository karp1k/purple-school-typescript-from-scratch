
interface PaymentPersistent {
    id: number;
    sum: number;
    from: string;
    to: string;
}

const p0: PaymentPersistent = {
    id: 2,
    sum: 5,
    from: "m",
    to: "f"
}

type PaymentWithoutId = Omit<PaymentPersistent, "id"> // new type based on PaymentPersistent without field "id"

const p: PaymentWithoutId = {
    sum: 1,
    from: "a",
    to: "b"
}

type PaymentWith = Pick<PaymentPersistent, "from" | "to"> // new type based on PaymentPersistent
                                                          // with specific field "from" and "to"

const p2: PaymentWith = {
    from: "d",
    to: "e"
}

// better explains here https://fjolt.com/article/typescript-extract-type
type PaymentExtract = Extract<PaymentPersistent | { "from": string } | {"to": string}, {id: number}> // extract fields "from" and "to"
                                                                         // that type of "string"

const b: PaymentExtract = {id: 1, from: "wefw", to: "to", sum: 2}

// https://fjolt.com/article/typescript-exclude-type
type UnionType = {a: string} | {b: string} | {c: number};

const ut1: UnionType = {a: "mv"};
const ut2: UnionType = {c: 12};

type UnionExclude = Exclude<UnionType, { c: number }>

const utE1: UnionExclude = ut1;
// const utE2: UnionExclude = ut2; // error {c: number} was excluded

export {}