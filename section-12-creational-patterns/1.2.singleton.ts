class Storage {

    private static INSTANCE = new Storage()

    map: Map<number, string> = new Map();

    private constructor() {}

    clean() {
        this.map = new Map<number, string>();
    }

    public static get(): Storage {
        if (!this.INSTANCE) {
            Storage.INSTANCE = new Storage();
        }
        return Storage.INSTANCE;
    }
}

class Service1 {

    addToStorage(key: number, val: string) {
        Storage.get().map.set(key, val)
    }

}

class Service2 {
    getFromStorage(key: number): string | undefined {
        return Storage.get().map.get(key);
    }
}

const s1 = new Service1();
s1.addToStorage(1, "something");
const s2 = new Service2();
console.log(s2.getFromStorage(1))


export {};