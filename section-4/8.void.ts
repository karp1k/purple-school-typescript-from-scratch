function logId(id: string | number): void {
    console.log(id);
}

const a = logId(1); // a is void type

function multiply(f: number, s?: number) {
    if (!s) {
        return f * f;
    }
}

type voidFunction = () => void;

const f1: voidFunction = () => {

}

const f2: voidFunction = () => {
    return true;
}


const b = f2(); // return would be ignored

const skills = ["Dev", "Devops"];

const user = {
    s: ['a']
}

skills.forEach((skill) => user.s.push(skill))







export {};