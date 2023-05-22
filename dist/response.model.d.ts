export declare class ResponseModel {
    isSuccess: boolean;
    data: any;
    message: string;
    isServerError?: boolean;
    serverError?: string;
    isUnAuthorized?: boolean;
    constructor(isSuccess: boolean, data: any, message: string);
    setError(message: string, isServerError?: boolean): void;
    setSuccess(message: string): void;
    setSuccessAndData(data: any, message: string): void;
    setServerError(ex: any): void;
    setUnAuthorized(message: string): void;
}
