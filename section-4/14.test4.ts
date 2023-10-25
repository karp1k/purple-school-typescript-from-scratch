enum PaymentStatus {
    Success,
    Failed
}

interface ResponseSuccessData {
    databaseId: number;
}

interface ResponseFailedData {
    errorMessage: string;
    errorCode: number;
}

interface ResponseSuccess {
    status: PaymentStatus.Success;
    data: ResponseSuccessData;
}

interface ResponseFailed {
    status: PaymentStatus.Failed;
    data: ResponseFailedData;
}

function getDatabaseId(response: ResponseSuccess | ResponseFailed): number {
    if (typeGuardIsResponseSuccess(response)) {
        return  response.data.databaseId;
    }
    throw new Error("response was failed");
}

const typeGuardIsResponseSuccess = (response: ResponseSuccess | ResponseFailed):response is ResponseSuccess  => {
    return response.status === PaymentStatus.Success
}







export {};