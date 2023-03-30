import {Request, Response, NextFunction} from 'express';
import UserService from '../services/user.service';

class UserController {
    async getUser(req: Request, res: Response, next: NextFunction){


        res.json();
    }

    async getAllUsers(req: Request, res: Response, next: NextFunction){
        
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
        
    }

    async login(req: Request, res: Response, next: NextFunction){
        
    }

    async logout(req: Request, res: Response, next: NextFunction){
        
    }

    async refresh(req: Request, res: Response, next: NextFunction){
        
    }
}

export default new UserController();