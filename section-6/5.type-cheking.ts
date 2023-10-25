// "strict": true

function test(a) { // "a" have to be typed implicitly as any -> a: any

}

// strictNullCheck: true

function  test1(a: number): number | undefined {
    if (a > 0) {
        return a;
    }
    return undefined;
}

// strictFunctionType: true

type StrOrNumFunc = (a: number | string) => number;

//let f: StrOrNumFunc = test;
// f("aaa")