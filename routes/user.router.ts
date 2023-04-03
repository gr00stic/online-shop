import Router from 'express';
import UserController from '../controllers/user.controller';
import {body} from 'express-validator';

const userRouter = Router();

userRouter.get('/get-user/:userId', UserController.getUser);
userRouter.get('/get-all-users', UserController.getAllUsers);
userRouter.get('/activate/:link', UserController.activate);
userRouter.get('/refresh', UserController.refresh);

userRouter.post('/registration', body('email').isEmail(), body('password').isLength({min: 4, max: 30}), UserController.registration);
userRouter.post('/login', UserController.login);
userRouter.post('/logout', UserController.logout);

export default userRouter;