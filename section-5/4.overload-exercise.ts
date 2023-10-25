class User {
    skills: string[] = [];

    addSkill(skill: string): void;
    addSkill(skill: string[]): void;
    addSkill(skill: string | string[]): void {
        if (typeof skill === "string") {
            this.skills.push(skill)
        } else {
            this.skills = this.skills.concat(skill)
        }
    }
}

const user = new User();
user.addSkill("devops")
user.addSkill(["java", "kotlin"])

console.log(user.skills);

function run(distance: string): string; // return type should be inside  of implementation method
function run(distance: number): number;
function run(distance: number | string): string | number {
    if (typeof distance === "number") {
        return 1;
    } else {
        return "";
    }

}

export {}