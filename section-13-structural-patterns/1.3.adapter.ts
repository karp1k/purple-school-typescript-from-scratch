class KVDatabase {
    private db: Map<string, string> = new Map();

    save(key: string, value: string) {
        console.log("save to map")
        this.db.set(key, value);
    }
}

class PersistentDB {
    savePersistent(data: Object) {
        console.log("saved to file");
    }
}

class PersistentDBAdapter extends KVDatabase {
    constructor(public database: PersistentDB) {
        super();
    }

    override save(key: string, value: string): void {
        this.database.savePersistent({key: key, value: value})
    }
}

function run(base: KVDatabase) {
    base.save("k", "v");
}

run(new PersistentDBAdapter(new PersistentDB()));
run(new KVDatabase());

export {};