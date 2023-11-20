import defaultThing, { b } from "./4.2.import-export"; // specific import
import abracadabra from "./4.2.import-export";
import * as all from "./4.2.import-export";
import {type MyType} from "./4.2.import-export"; // saying that we're importing only Types that doesn't exist in runtime

console.log(b);
abracadabra(); // run funciton
defaultThing(); // also run function
all.Obj;

const a: MyType = "";

export {};