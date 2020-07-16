import { CustomErrorBase } from "./custom-error-base";
import { IErrorSkeleton } from "../models/contracts/error-contracts";
export declare class NotFoundError extends CustomErrorBase {
    statusCode: number;
    constructor();
    serializeErrors(): IErrorSkeleton[];
}
