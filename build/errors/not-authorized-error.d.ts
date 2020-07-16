import { CustomErrorBase } from "./custom-error-base";
import { IErrorSkeleton } from "../models/contracts/error-contracts";
export declare class NotAuthorizedError extends CustomErrorBase {
    statusCode: number;
    constructor();
    serializeErrors(): IErrorSkeleton[];
}
