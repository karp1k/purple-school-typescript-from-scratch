let input: unknown;

input = 3;
input = ['', 'fafasf'];
input = true;
let inputAny : any;
// let res: string = input; // can't assign unknown type to string
let res: string = inputAny // in contrast 'unknown', 'any' could be assigned
// to string or any other type, 'unknown' should be casted(!)

function run(i: unknown) {
    if (typeof i == 'number') {
        i++;
    } else {
        // i still unknown
    }
}

run(input);

async function getData() {
    try {
        await fetch('');
    } catch (error) { // error is unknown
        if (error instanceof Error) { // safe cast
            console.log(error.message);
        }
    }
}

async function getDataForce() {
    try {
        await fetch('')
    } catch (error) {
        const e = error as Error; // not recommended - not safe cast
    }
}

type U1 = unknown | null; // union of something with unknown always unknown (because it wider)
type I1 = unknown & string; // intersection with unknown took the narrow
export {};