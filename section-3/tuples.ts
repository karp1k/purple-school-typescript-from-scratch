const skills: [number, string] = [1, 'Dev']; // tuple, in js just an array
const id = skills[0];
const name = skills[1];
// const third = skills[2]; // error element out rich
skills.push("aaarrv"); // allowed because it still js array
skills.pop(); // same reason

const [idDestruct, nameDestruct] = skills;

const arr: [number, string, ...boolean[]] = [1, 'sdf', true, true, false];
console.log(arr)
export {}