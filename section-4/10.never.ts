function generateError(message: string): never { // function is not return anything
    throw new Error(message);
}

function dumpError(): never {
    while (true) {} // never return from function
}

// const a: never = 1; //error - we can't assign anything
// const b: void = undefined // correct

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
    switch (action) {
        case "refund":
            //...
            break;
        case "checkout":
            // ...
            break;
        default:
            // const _: never = action; // error because we didn't process 'reject' case
            throw new Error("action doesn't exist");
    }
}

function isString(x: string | number): boolean {
    if (typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false;
    }
    generateError('aaaa'); // function is a 'never' type that leads to -> return type of isString would be boolean NOT boolean | undefined
    // omitted return, never go here because 'generateError' return type is 'never'
}

export {};