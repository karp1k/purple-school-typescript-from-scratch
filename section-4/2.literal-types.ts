function fetchWithAuth(url: string, method: "post" | "get"): 1 | -1 { // literal type
    return 1;
}

fetchWithAuth("/some-ur", "post");
// fetchWithAuth("/some-ur", "reewfw"); // error! only post or get

let a: "aoapw" = "aoapw";

let methodForVar = "post";

// fetchWithAuth("aa", method); // error type, methodForVar is a string while arg type is a union "post" | "get"
fetchWithAuth("/aa", methodForVar as "post");




export {};