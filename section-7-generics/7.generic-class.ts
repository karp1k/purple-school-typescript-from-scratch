class Resp<D, E> {

    constructor(public data?: D, public error?: E) {}

}

const res = new Resp("data");

class HttpResp<F extends number> extends Resp<string, number>{
    code: F

    setCode(code: F) {
        this.code = code;
    }
}

const httpRes = new HttpResp("anotherData", 1)
httpRes.setCode(200);


export {};