const a: Array<number> = [1, 2, 3]; // number inside <> is generic

async function test() {
    const a = await new Promise<number>((res, rej) => {
        res(1);
    });
}

const check: Record<string, boolean> = {
    drive: true,
    kpp: false
}

export {};