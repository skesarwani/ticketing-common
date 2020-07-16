import { IErrorSkeleton } from "./contracts/error-contracts";
import { IUserPayload } from "./contracts/user-contracts";
export declare class ErrorMetadata {
    constructor(errorList: Array<IErrorSkeleton>);
    errors: Array<IErrorSkeleton>;
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: IUserPayload;
        }
    }
}
