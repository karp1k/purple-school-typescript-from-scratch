import {someConst} from "./2.2.modules-backend";

// for using ES6 as tsconfig.json -> module: "ES6":
// 1. package.json add ->   "type": "module",
// 2. add .js postfix for importing modules. Fore example import {something} from "./some-module/some-file.js"
// If targeting commonJs previous steps not required
console.log(someConst)

export {};