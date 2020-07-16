import { IErrorSkeleton } from "./contracts/error-contracts";
export declare class ErrorMetadata {
    constructor(errorList: Array<IErrorSkeleton>);
    errors: Array<IErrorSkeleton>;
}
