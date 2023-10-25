let strOrNum: string | number = 5;

if (Math.random() > 0.5) {
    strOrNum = 5;
} else {
    strOrNum = "str";
}

if (typeof  strOrNum === "string") {
    console.log(strOrNum);
} else {
    console.log(strOrNum);
}

let strOrNum2: typeof strOrNum // "string" | "number"

const user = {
    name: "Steve"
};

type keyOfUser = keyof typeof user; // return "name"

enum Direction {
    Up,
    Down
}

type d = keyof typeof Direction;


export {};