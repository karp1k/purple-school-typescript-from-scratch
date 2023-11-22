interface Insurance {
    id: number;
    status: string;
    setVehicle(vehicle: any): void;
    submit(): Promise<boolean>;
}

class TFInsurance implements Insurance {
    id: number;
    status: string;
    private vehicle: any;

    setVehicle(vehicle: any): void {
        this.vehicle = vehicle;
    }

    async submit(): Promise<boolean> {
        const response = fetch('', {method: 'POST', body: JSON.stringify({vehicle: this.vehicle})})
        // @ts-ignore
        return await response.data.isSuccess; // pseudo
    }

}

class ABInsurance implements Insurance {
    id: number;
    status: string;
    private vehicle: any;

    setVehicle(vehicle: any): void {
        this.vehicle = vehicle;
    }

    async submit(): Promise<boolean> {
        const response = fetch('', {method: 'POST', body: JSON.stringify({vehicle: this.vehicle})})
        // @ts-ignore
        return await response.data.isSuccess; // pseudo
    }

}

abstract class InsuranceFactory {
    db: any;

    abstract createInsurance(): Insurance;

    saveHistory(insurance: Insurance) {
        this.db.save(insurance);
    }
}

class TFInsuranceFactory extends InsuranceFactory {
    createInsurance(): TFInsurance {
        return new TFInsurance();
    }

}

class ABInsuranceFactory extends InsuranceFactory {

    createInsurance(): ABInsurance {
        return new ABInsurance();
    }

}


const tfInsuranceFactory = new TFInsuranceFactory();
const tfInsurance = tfInsuranceFactory.createInsurance();
const abInsuranceFactory = new ABInsuranceFactory();
const abInsurance = abInsuranceFactory.createInsurance();
abInsuranceFactory.saveHistory(abInsurance);


const INSURANCE_TYPE = {
    tf: TFInsurance,
    ab: ABInsurance
}

type IT = typeof INSURANCE_TYPE;

class InsuranceFactoryAlt {
    db: any;

    createInsurance<T extends keyof IT>(type: T): IT[T] {
        return INSURANCE_TYPE[type];
    }
}

const insuranceFactoryAlt = new InsuranceFactoryAlt();
const insuranceAlt = new (insuranceFactoryAlt.createInsurance("tf"))

export {};