function getFullNameFromObject(user: {firstName: string, surName: string}): string {
    return `${user.firstName} ${user.surName}`;
}

const someUser = {
    firstName: "Bob",
    surName: "Woodmaker",
    city: "London",
    age: 33,
    skills: {
        dev: true,
        devops: true,
        soft: false
    }
};

console.log(getFullNameFromObject(someUser))