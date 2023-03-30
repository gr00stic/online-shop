import Router from 'express';
import UserController from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/get-user/:userId', UserController.getUser);
userRouter.get('/get-all-users', UserController.getAllUsers);
userRouter.get('/activate/:link', UserController.activate);
userRouter.get('/refresh', UserController.refresh);

userRouter.post('/registration', UserController.registration);
userRouter.post('/login', UserController.login);
userRouter.post('/logout', UserController.logout);

export default userRouter;