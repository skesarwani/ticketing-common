import { CustomErrorBase } from "./custom-error-base";
import { IErrorSkeleton } from "../models/contracts/error-contracts";
export declare class DatabaseConnectionError extends CustomErrorBase {
    statusCode: number;
    constructor(reason?: string);
    serializeErrors(): IErrorSkeleton[];
}
