
function getSplitedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
}

const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;

interface ILogLine<T> {
    timestamp: Date;
    data: T
}

type ILogLineType<T> = {
    timestamp: Date;
    data: T
}

const logLine: ILogLine<{ a: number }> = {
    timestamp: new Date(),
    data: {
        a: 1
    }
}

export {};