/*
* необходимо написать функцию toString, которая принимает любой тип
* и возвращает строкое представление. Если не может возвращает undefined
* */

function toString<T>(o: T): string | undefined {
    if (Array.isArray(o)) {
        return o.toString();
    }
    switch (typeof o) {
        case "string": return o;
        case "number":
        case "symbol":
        case "bigint":
        case "function":
        case "boolean": return o.toString();
        case "object": return JSON.stringify(o);
        case "undefined": return undefined;
    }
}

console.log(toString(0))
console.log(toString("0"))
console.log(toString([1, 2, 3]))
console.log(toString({a: 1}));
console.log(toString({0: "0", 1: 2, b: {true: "o", false: 1}}));
console.log(toString(false))
console.log(toString(undefined))

export {};