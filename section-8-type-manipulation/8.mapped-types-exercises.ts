/*

    Create Type for form validation result
    base on form type using mapped-types

 */
interface IForm {
    name: string;
    password: string;
}

const form: IForm = {
    name: "Jeff",
    password: "94012h92hf43nf"
}



const formValidation = {
    name: {isValid: true},
   // password: {isValid: false, errorMessage: "Must be longer than 5 symbols"}
}

type ValidationObject = {
    isValid: boolean;
    errorMessage?: string;
}

type HasPassword = {
    password: string;
}

//mapped type
type ValidationType<T extends HasPassword> = {
    [Property in keyof T]: ValidationObject;
}

const formValidation2: ValidationType<IForm> = {
    name: {isValid: true},
    password: {isValid: false, errorMessage: "Must be longer than 5 symbols"}
}

export {};