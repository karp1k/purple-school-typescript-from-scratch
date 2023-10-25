// "noUnusedLocals": true  marks code with warning then there is some unused local variables
// "noUnusedParameters": true same as for local variables
// "exactOptionalPropertyTypes": true  if set true
// -> then we can't set optional property - "someProp?: any" to undefined
// "noFallthroughCasesInSwitch" : true - marks code in switch cases then we lost to set "break" or "return" clause in some "case"
// "allowUnreachableCode": true show if we had unreachable code
// "noUncheckedIndexedAccess": true allow to return undefined when trying to access some elements in array
// "noImplicitOverride": true force to type override word before method signature when overriding method from parent
export {};