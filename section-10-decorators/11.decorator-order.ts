function UniDecorator(name: string): any {
    console.log(`Initialization ${name}`)
    return function () {
        console.log(`Call ${name}`)
    }
}
/*
Initialization Property 2
Call Property 2
Initialization Property
Call Property
Initialization Method
Initialization Method arg
Call Method arg
Call Method
Initialization Static property
Call Static property
Initialization Static method
Initialization Static method arg
Call Static method arg
Call Static method
Initialization Class
Initialization Constructor arg
Call Constructor arg
Call Class
*/

@UniDecorator("Class")
class SomeClass {

    @UniDecorator("Property 2")
    someProp2: any;

    @UniDecorator("Property")
    someProp: any;

    @UniDecorator("Static property")
    static someStaticProp: any;

    @UniDecorator("Static method")
    static someStaticMethod(@UniDecorator("Static method arg") someStaticArg: any) {

    }

    @UniDecorator("Method")
    someMethod(@UniDecorator("Method arg") someArg: any) {

    }

    constructor(@UniDecorator("Constructor arg") someConstructorArg: any) {
    }

}

export {};