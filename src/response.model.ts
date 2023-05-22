export class ResponseModel {
    isSuccess: boolean;
    data: any;
    message: string;
    isServerError?: boolean;
    serverError?: string;
    isUnAuthorized?: boolean;

    constructor(isSuccess: boolean, data: any, message: string) {
        this.isSuccess = isSuccess;
        this.data = data;
        this.message = message;
    }
    setError(message: string, isServerError: boolean = false): void {
        this.isSuccess = false;
        this.message = message;
        this.isServerError = isServerError;
    }
    setSuccess(message: string): void {
        this.isSuccess = true;
        this.isServerError = false;
        this.message = message;
    }

    setSuccessAndData(data: any, message: string): void {
        this.data = data;
        this.isSuccess = true;
        this.isServerError = false;
        this.message = message;
    }

    setServerError(ex: any): void {
        this.serverError = ex;
        this.setError("ERROR: " + ex.message, true);
    }

    setUnAuthorized(message: string): void {
        this.isUnAuthorized = true;
        this.data = undefined;
        this.setError(message);
    }
}