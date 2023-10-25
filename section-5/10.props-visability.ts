class Vehicle {
    make: string; // implicitly public
    private damages: string[]; // private only works in TS (!) fine for backend
    private _model: string;
    protected run: number;
    #price: number; // private in JS (!) - better to use in front

    set model(m: string) {
        this._model = m;
        this.#price = 120
    }

    get model() {
        return this._model;
    }

    addDamage(damage: string) {
        this.damages.push(damage);
    }
}

const r = new Vehicle();

class EuroTruck extends Vehicle {
    setRun(km: number) {
        this.run = km / 0.62; // run is protected
        // this._model is not allowed
    }
}

export {};