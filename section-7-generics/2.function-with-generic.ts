function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
}

const res = logMiddleware<string>("fwfwfe");

function getSplitedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
}

const splited: number[] = getSplitedHalf([1, 2, 3]);
console.log(splited)

const splited2: string[] = getSplitedHalf(["1", "21412", "fewfwfe", "3r2f2"]);
console.log(splited2)

export {};