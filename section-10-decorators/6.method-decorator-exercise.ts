/*
    create decorator for catching and logging error
    with optional parameter to rethrow error after logging
 */

interface IUserService {
    users: number;

    getUserInDatabase(): number;
}

class UserService implements IUserService {
    users: number = 1000;

    constructor(public url: string) {
    }

    @Catch()
    getUserInDatabase(): number {
        throw new Error("some error inside getUserInDatabase")
       // return this.users;
    }
}

// target - Class owner
// propertyKey - function name
// descriptor - meta info about function with function itself inside
function Catch(rethrow?: boolean) { // factory decorator
    return (target: Object,
            propertyKey: string | symbol,
            descriptor: TypedPropertyDescriptor<(...args: any[]) => any>)
        : TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        // console.log(target)
        // console.log(propertyKey)
        // console.log(descriptor)

        const oldFunc = descriptor.value;

        descriptor.value = function (...args: any[]): any { // override function behavior
            try {
                return oldFunc?.apply(this, args);
            } catch (e) {
                if (e instanceof Error) {
                    console.log("catch some error: ", e.message);
                } else {
                  console.log("catch some error ")
                }

                if (!!rethrow) {
                    throw e;
                }
            }
        }

        return descriptor;
    }
}

console.log(new UserService("some url").getUserInDatabase())

export {}