export {};

abstract class Command {

    commandId: number;

    abstract execute(): void;

    constructor(public history: CommandHistory) {
        this.commandId = Math.random();
    }
}

interface User {
    id: number;
}

class UserService {

    addUser(user: User) {
        console.log(`user created with id ${user.id}`)
    }

    deleteUser(userId: number) {
        console.log(`user deleted with id ${userId}`)
    }
}

class CommandHistory {
    commands: Command[] = [];

    add(command: Command) {
        this.commands.push(command);
    }

    remove(commandId: number) {
        this.commands = this.commands.filter(command => command.commandId != commandId)
    }
}

class AddUserCommand extends Command {
    execute(): void {
        this.receiver.addUser(this.user);
        this.history.add(this);
    }

    undo(): void {
        this.receiver.deleteUser(this.user.id)
        this.history.remove(this.commandId)
    }

    constructor(
        private user: User,
        private receiver: UserService,
        history: CommandHistory) {
        super(history);
    }
}

class Controller {
    private receiver: UserService;
    private commandHistory = new CommandHistory();

    run() {
        const addUserCommand = new AddUserCommand({id: 1}, this.receiver, this.commandHistory)
        addUserCommand.execute();
        console.log(this.commandHistory);
        addUserCommand.undo();
        console.log(this.commandHistory);
    }

    setReceiver(userService: UserService) {
        this.receiver = userService;
    }
}

const controller = new Controller();
const userService = new UserService();
controller.setReceiver(userService);
controller.run();