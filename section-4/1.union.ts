function logId(id: string | number | boolean) { // <---- union of string, number and boolean
    if (typeof id === 'string') {
        console.log(id.toLowerCase()); //id is a string
    } else if (typeof id === 'number') {
        console.log(id); //id is a number
    } else {
        console.log(id); //id is a boolean
    }
}

logId(1);
logId("some-string-id");
logId(true);

function logError(error: string | string[]) {
    if (Array.isArray(error)) {
        console.log(error); // error is an array
    } else {
        console.log(error) // error is a string
    }
}

function logObject(obj: {a: number} | {b: number}) {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}

function logMultipleIds(a: string | number, b: string | boolean) {
    if (typeof a === typeof b) {

    } else {
        console.log(a);
    }
}


let a: 1 = 1;
// a = 2; // error




















export {};