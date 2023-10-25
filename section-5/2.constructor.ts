class User {
    name: string;
    age: number;

    constructor(); // realisation constructor
    constructor(name: string); // realisation constructor
    constructor(age: number); // realisation constructor
    constructor(ageOrName?: string | number) { // implementation constructor - is the last constructor
        if (typeof ageOrName === 'string') { // that satisfy ALL realisation constructors
            this.name = ageOrName;
        } else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }
    }
}

const user = new User("Steve");
const user2 = new User();
console.log(user);
user.name = "Bob";
console.log(user);

export {};