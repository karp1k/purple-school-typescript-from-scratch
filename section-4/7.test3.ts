interface Payment {
    sum: number;
    from: number;
    to: number;
}

interface SuccessDataResponse extends Payment{
    databaseId: number;
}

interface FailedDataResponse {
    errorMessage: string;
    errorCode: number;
}


// interface Response {
//     status: "success" | "failed";
//     data: SuccessDataResponse | FailedDataResponse
// }

interface SuccessResponse {
    status: "success";
    data: SuccessDataResponse;
}

interface FailedResponse {
    status: "failed";
    data: FailedDataResponse;
}

export {};