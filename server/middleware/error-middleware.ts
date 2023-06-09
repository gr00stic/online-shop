import { NextFunction, Request, Response } from "express";
import ApiError from "../models/error.model";

function errorHandler(err: ApiError, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ApiError) {
        return res
            .status(err.status)
            .json({
                message: err.message,
                errors: err.errors
            });
    }
    
    console.log(err);
    
    return res.status(500).json({ message: 'Unexpected error' });
}

export default errorHandler;