import Router from 'express';
import UserController from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/get-user/:id', UserController.getUser);
userRouter.get('/get-all-users', UserController.getAllUsers);

userRouter.post('/registration', UserController.registration);
userRouter.post('/login', UserController.login);

export default userRouter;