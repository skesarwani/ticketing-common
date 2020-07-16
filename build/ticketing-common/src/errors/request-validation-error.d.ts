import { ValidationError } from "express-validator";
import { CustomErrorBase } from "./custom-error-base";
import { IErrorSkeleton } from "../models/contracts/error-contracts";
export declare class RequestValidationError extends CustomErrorBase {
    errors: ValidationError[];
    statusCode: number;
    constructor(errors: ValidationError[]);
    serializeErrors(): IErrorSkeleton[];
}
