class UserService {
    // static name: string = "fb"; static name reserved!
    static db: any;
    private static pass: any;

    static getUser(id: number) {
        return UserService.db.findById(id);
    }

    create() {
        const db = UserService.db
    }

    static {
        // await new Promise() error - await in static block
        UserService.db = "abc";
    }
}

export {};