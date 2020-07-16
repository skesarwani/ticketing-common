import { CustomErrorBase } from "./custom-error-base";
import { IErrorSkeleton } from "../models/contracts/error-contracts";
export declare class BadRequestError extends CustomErrorBase {
    message: string;
    statusCode: number;
    constructor(message: string);
    serializeErrors(): IErrorSkeleton[];
}
