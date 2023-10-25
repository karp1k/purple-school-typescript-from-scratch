const skills: string[] = ['Dev', 'Devops', 'Testing'];

for(const skill of skills) {
    console.log(skill)
}
console.log("====")
const res = skills
    .filter((s: string) => s !== 'Devops')
    .map(s => s + "! ")
    .reduce((a, b) => a + b); // combine all elements into 1 result

console.log(res);

export {};