import { ISerializableCustomError, IErrorSkeleton } from "../models/contracts/error-contracts";
export declare abstract class CustomErrorBase extends Error implements ISerializableCustomError {
    abstract serializeErrors(): IErrorSkeleton[];
    abstract statusCode: number;
    constructor(message: string);
}
