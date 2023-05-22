"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseModel = void 0;
class ResponseModel {
    constructor(isSuccess, data, message) {
        this.isSuccess = isSuccess;
        this.data = data;
        this.message = message;
    }
    setError(message, isServerError = false) {
        this.isSuccess = false;
        this.message = message;
        this.isServerError = isServerError;
    }
    setSuccess(message) {
        this.isSuccess = true;
        this.isServerError = false;
        this.message = message;
    }
    setSuccessAndData(data, message) {
        this.data = data;
        this.isSuccess = true;
        this.isServerError = false;
        this.message = message;
    }
    setServerError(ex) {
        this.serverError = ex;
        this.setError("ERROR: " + ex.message, true);
    }
    setUnAuthorized(message) {
        this.isUnAuthorized = true;
        this.data = undefined;
        this.setError(message);
    }
}
exports.ResponseModel = ResponseModel;
//# sourceMappingURL=response.model.js.map