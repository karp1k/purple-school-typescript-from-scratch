/* Необходимо реализовать абстрактный класс Logger с 2-мя методами
    абстрактным - log(message): void
    printDate - выводящий в log дату
    К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
    выводящий сначала дату, а потом заданное сообщение

 */

abstract class Logger {
    abstract log(message: string): void;

    printDate(): void {
        this.log(new Date().toString())
    }
}

class LoggerWithDate extends Logger {
    log(message: string): void {
        console.log(message);
    }

    logWitDate(message: string) {
        this.printDate();
        this.log(message);
    }

}

const logger = new LoggerWithDate();
logger.log("some log")
logger.logWitDate("some log")

export {};