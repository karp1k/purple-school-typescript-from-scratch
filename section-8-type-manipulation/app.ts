type ReadOrWrite = "read" | "write";
type Bulk = "bulk" | "";

type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`; // canRead canWrite

type ErrorOrSuccess = "error" | "success";

type Response = {
    result: `http${Capitalize<ErrorOrSuccess>}`;
}

const a: Response = {
    result: "httpSuccess"
}

type ReadORWriteBulk<T> = T extends `can${infer R}` ? R : never;

type t = ReadORWriteBulk<Access>; // remove can prefix


export {};