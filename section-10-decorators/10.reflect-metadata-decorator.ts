import "reflect-metadata";

//metadata doc: https://rbuckton.github.io/reflect-metadata/
// metadatakeys: "design:type", "design:paramtypes", "design:returntype"
// only works with tsconfig.json -> "emitDecoratorMetadata": true

const METADATA_KEY_POSITIVE = Symbol("METADATA_KEY_POSITIVE");

interface IUserService {

    getUserInDatabase(): number;
}

class UserService implements IUserService {
    private _users: number;

    constructor(public url: string) {
    }

    getUserInDatabase(): number {
       return this._users;
    }

    @Validate()
    setUserInDatabase(@Positive() num: number): void {
        this._users = num;
    }
}

function Positive() {
    return (target: Object, propertyKey: string | symbol,  parameterIndex: number) => {

        // console.log("design:type: ", Reflect.getOwnMetadata("design:type", target, propertyKey))
        // console.log("design:paramtypes: ", Reflect.getOwnMetadata("design:paramtypes", target, propertyKey))
        // console.log("design:returntype: ", Reflect.getOwnMetadata("design:returntype", target, propertyKey))
        const existParams: number[] = Reflect.getOwnMetadata(METADATA_KEY_POSITIVE, target, propertyKey) || [];
        existParams.push(parameterIndex);
        Reflect.defineMetadata(METADATA_KEY_POSITIVE, existParams, target, propertyKey);
    }
}

function Validate() {
    return (target: Object,
            propertyKey: string | symbol,
            descriptor: TypedPropertyDescriptor<(...args: any[]) => any>) => {
        const oldMethod = descriptor.value;
        descriptor.value = function (...args: any) {
            const positiveArgsIndex = Reflect.getOwnMetadata(METADATA_KEY_POSITIVE, target, propertyKey)
            if (positiveArgsIndex) {
                for (let index of positiveArgsIndex) {
                    if (args[index] < 0) {
                        throw new Error("number must be greater then 0");
                    }
                }
            }
            oldMethod?.apply(target, args);
        }
        return descriptor;
    }
}

const us = new UserService("https://google.com");
us.setUserInDatabase(10);
console.log(us.getUserInDatabase());
us.setUserInDatabase(-10);
console.log(us.getUserInDatabase());
export {}