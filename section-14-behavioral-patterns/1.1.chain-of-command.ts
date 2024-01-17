export {};

interface Middleware {

    next(mid: Middleware): Middleware;
    handle(req: any): any;
}

abstract class SimpleMiddleware implements Middleware {

    private nextMiddleware: Middleware;

    handle(req: any): any {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(req);
        }
    }

    next(mid: Middleware): Middleware {
        this.nextMiddleware = mid;
        return mid;
    }

}

class AuthMiddleware extends SimpleMiddleware {


    handle(req: any): any {
        console.log("AuthMiddleware")
        if (req.id !== 1) {
            return {error: "wrong id"};
        }
        return super.handle(req);
    }
}

class ValidationMiddleware extends SimpleMiddleware {


    handle(req: any): any {
        console.log("ValidationMiddleware")
        if (!req.body) {
            return {error: "no body"}
        }
        return super.handle(req);
    }
}

class Controller extends SimpleMiddleware {

    handle(req: any): any {
        console.log("Controller")
        return {success: req};
    }
}

const auth = new AuthMiddleware();
const valid = new ValidationMiddleware();
const controller = new Controller();

auth.next(valid).next(controller);
console.log(auth.handle({id: 2, body: "inside body"}))
console.log(auth.handle({id: 1, }))
console.log(auth.handle({id: 1, body: "some body"}))