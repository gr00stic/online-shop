import {Request, Response, NextFunction} from 'express';
import UserService from '../services/user.service';

class UserController {
    async getUser(req: Request, res: Response, next: NextFunction){
        try {
            const userId = req.params.userId;

            const user = await UserService.getUser(userId);
            
            return res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async getAllUsers(req: Request, res: Response, next: NextFunction){
        try {
            const users = await UserService.getAllUsers();

            return res.json(users);
        } catch (e) {
            next(e);
        }
    }

    async registration(req: Request, res: Response, next: NextFunction){
        try {
            const {name, email, password} : {name: string, email: string, password: string} = req.body;
            const user = await UserService.registration(name, email, password);

            res.cookie('refreshToken', user.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

            return res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async activate(req: Request, res: Response, next: NextFunction){
        try {
            const activationLink = req.params.link;  

            const activatedUser = await UserService.activate(activationLink);

            return res.json(activatedUser);
        } catch (e) {
            next(e);
        }
    }

    async login(req: Request, res: Response, next: NextFunction){
        try {
            
        } catch (e) {
            next(e)
        }
    }

    async logout(req: Request, res: Response, next: NextFunction){
        try {
            
        } catch (e) {
            next(e)
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction){
        try {
            
        } catch (e) {
            next(e)
        }
    }
}

export default new UserController();