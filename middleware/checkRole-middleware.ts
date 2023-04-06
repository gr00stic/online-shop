import { NextFunction, Request, Response } from "express";
import ApiError from "../models/error.model";
import tokenService from "../services/token.service";

export = function (role: string) {
    return function checkRoleMiddleware(req: Request, res: Response, next: NextFunction) {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return next(ApiError.unauthorizedError());
            }

            const accessToken = authHeader.split(' ')[1];
            if (!accessToken) {
                return next(ApiError.unauthorizedError());
            }

            const userData = tokenService.validateAccessToken(accessToken);
            if (!userData) {
                return next(ApiError.unauthorizedError());
            }

            if (Object(userData).role !== role ) {
                return next(ApiError.forbiddenError());
            }

            req.user = userData;
            next();
        } catch (e) {
            return next(ApiError.unauthorizedError());
        }
    }
}
