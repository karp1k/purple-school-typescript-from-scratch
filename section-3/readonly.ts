const skills: readonly [number, string] = [1, 'Dev']; // tuple, in js just an array
let a = 4; // let - is a variable ||| const - is a constant
a = 76;
const skillsArray: readonly string[] = ['Dev', 'DevOps'];
// skills[0] = ''; // readonly error
// skillsArray[0] = '0' // readonly error

export {}