/*
 * in tsconfig.js do:
 *  "module": "AMD"
 *  "outFile": "./result.js"
 *  "include": ["./section-11-modularity/*"] compile only files that match pattern
 */
namespace TopicA {
    export const name = "someTopicName"

    interface RequestDto {

    }
}

// export {TopicA};