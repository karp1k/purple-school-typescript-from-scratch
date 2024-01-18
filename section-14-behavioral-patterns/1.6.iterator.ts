export {};


class Task {
    constructor(public priority: number) {
    }
}

class TaskList {

    private tasks: Task[] = [];

    // should be inside PriorityIterator not in TaskList! Single responsibility
    sortByPriority() {
        this.tasks = this.tasks
            .sort((a, b) => {
                if (a.priority > b.priority) {
                    return 1;
                } else if (a.priority < b.priority) {
                    return -1;
                } else {
                    return 0;
                }
            })
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }

    getIterator(): Iterator<Task> {
        return new PriorityIterator(this);
    }

}

interface Iterator<T> {

    current(): T | undefined;
    next(): T | undefined;
    prev(): T | undefined;
    index(): number;
}

class PriorityIterator implements Iterator<Task> {

    private i: number = 0;

    constructor(private taskList: TaskList) {
    }

    current(): Task | undefined {
        return this.taskList.getTasks()[this.i];
    }

    index(): number {
        return this.i;
    }

    next(): Task | undefined {
        return this.taskList.getTasks()[++this.i];
    }

    prev(): Task | undefined {
        return this.taskList.getTasks()[--this.i];
    }

}

const taskList = new TaskList();
taskList.addTask(new Task(10));
taskList.addTask(new Task(4));
taskList.addTask(new Task(14));
taskList.sortByPriority();
console.log(taskList.getTasks())
const iterator = taskList.getIterator();
console.log("current: ", iterator.current());
console.log("next: ", iterator.next());
console.log("prev: ", iterator.prev());
console.log("next: ", iterator.next());
console.log("next: ", iterator.next());
console.log("next: ", iterator.next());
console.log("prev: ", iterator.prev());
console.log("prev: ", iterator.prev());
console.log("prev: ", iterator.prev());
console.log("prev: ", iterator.prev());
