const n: null = null;
// const f: null = undefined; // error
const f2: any = null;
// const f3: number = null; error! strict null check
// const f4: string = null;
// const f5: boolean = null;
// const f5: undefined = null;

interface User {
    name: string;
}

function getUser() {
    if (Math.random() > 0.5) {
        return null;
    } else {
        return {
            name: 'Steve'
        } as User
    }
}

const user = getUser();
if (user) {
    const userName = user.name;
}
// null then we want explicitly(!) say that there couldn't be a value
export {};
