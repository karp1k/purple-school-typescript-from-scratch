interface IUserService {
    users: number;

    getUserInDatabase(): number;
}

class UserService implements IUserService {
    users: number = 1000;

    constructor(public url: string) {
    }

    @Log()
    getUserInDatabase(): number {
        throw new Error("error")
    }
}

// target - Class owner
// propertyKey - function name
// descriptor - meta info about function with function itself inside
function Log() { // factory decorator
    return (target: Object,
            propertyKey: string | symbol,
            descriptor: TypedPropertyDescriptor<(...args: any[]) => any>)
        : TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        // console.log(target)
        // console.log(propertyKey)
        // console.log(descriptor)
        const oldFunc = descriptor.value;
        descriptor.value = () => { // override function behavior
            console.log("start function");
            oldFunc!();
            // not happend throw error console.log("end function")
        }
    }
}

console.log(new UserService("some url").getUserInDatabase())

export {}