import { IErrorSkeleton } from "./contracts/error-contracts";
import { IUserPayload } from "./contracts/user-contracts";

export class ErrorMetadata {
    constructor(errorList: Array<IErrorSkeleton>) {
        this.errors = errorList;
    }
    errors: Array<IErrorSkeleton>;
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: IUserPayload;
        }
    }
}