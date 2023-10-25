//      ts | js
//  number | number
//  string | string
// boolean | boolean
//  object | object
//   Array | Array
//  Tuples | Array
//    Enum | ? function OR constant that doesn't exist at runtime

enum StatusCode { // heterogen enum (number and string values) still considering as number enum
    SUCCESS = 1,
    IN_PROGRESS = 'p',
    CANCELED = 'c'
}

const res = {
    message: 'Payment successful',
    statusCode: StatusCode.SUCCESS
};

// 1 - success - 's'
// 2 - in progress - 'p'
// 3 - canceled - 'c'
if (res.statusCode === StatusCode.SUCCESS) {

}

function action(status: StatusCode) {

}

action(1);
action(3);
// action('p')

function computeEnumVal () {
    return 4;
}
enum Roles {
    ADMIN,
    USER = computeEnumVal() // only compile time
}

const enum SomeConstEnum { // doesn't exist in runtime
    ONE,
    TWO
}

const a = SomeConstEnum.ONE;
const b = SomeConstEnum.TWO;

export {}