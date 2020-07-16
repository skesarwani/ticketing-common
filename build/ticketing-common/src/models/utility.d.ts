import { ValidationError } from "express-validator";
export declare class Utility {
    static transformErrorList(errorList: ValidationError[]): {
        message: any;
        field: string;
    }[];
}
