interface User {
    login: string;
    password?: string;
}

const user: User = {
    login: "some-mail@provider.ru",
    password: "123"
}

function multiply(first: number, second?: number): number {
    if (!second) {
        return first * first;
    }
    return first * second
}

multiply(5);
multiply(2, 3);

interface UserPro {
    login: string;
    password?: {
        type: "primary" | "secondary"
    }
}

function testPass(user: UserPro) {
    const t = user.password?.type
}

function test(param?: string) {
    const t = param ?? "default";
}

export {};