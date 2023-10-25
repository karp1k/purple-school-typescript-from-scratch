class Vehicle {

    constructor(public run: number) {
    }
}

class LCV extends Vehicle {
    capacity: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62
    return vehicle
}

const vehicle = kmToMiles(new Vehicle(23));
const lcv = kmToMiles(new LCV(21421));
kmToMiles({run: 1}); // Vehicle as Generic works as interface here

function logId<T extends string | number, Y>(id: T, additionalData: Y): { id: T, data: Y } {
    console.log(id);
    console.log(additionalData);
    return {id, data: additionalData};
}

export {};