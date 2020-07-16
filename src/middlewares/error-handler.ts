import { Request, Response, NextFunction } from "express";
import { ErrorMetadata } from "../../../ticketing-nodeMicroservices-react/authapi/src/app/models/models";
import { CustomErrorBase } from "../errors/custom-error-base";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomErrorBase) {
        return res.status(err.statusCode).send(new ErrorMetadata(err.serializeErrors()))
    }
    return res.status(400).send(new ErrorMetadata([{ message: err.message }]));
}