import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import ApiError from "../models/error.model";
import UserModel from "../models/user.model";
import mailService from "./mail.service";
import tokenService from "./token.service";
import UserDto from "../dtos/user.dto";

class UserService {
    // async isUserExists(email: string){
    //     const user = await UserModel.findOne({email: email});

    //     if(user){
    //         throw ApiError.badRequest('User with this email already exists', {
    //             msg: 'User with this email already exists',
    //             param: 'email'
    //         });
    //     }

    //     return user;
    // }

    async registration(name: string, email: string, password: string){
        const candidate = await UserModel.findOne({email: email});

        if(candidate){
            throw ApiError.badRequest('User with this email already exists', {
                msg: 'User with this email already exists',
                param: 'email'
            });
        }

        const hashPassword = await bcrypt.hash(password, 4);
        const activationLink = v4();

        const user = await UserModel.create({name, email, password: hashPassword, activationLink});
        
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        

        return {user: userDto, ...tokens};
    }

    async activate(activationLink: string){
        const user = await UserModel.findOne({activationLink: activationLink});

        if(!user){
            throw ApiError.badRequest('Incorrect activation link', {
                msg: 'Incorrect activation link',
                param: 'activationLink'
            });
        }

        if(user.isActivated === true){
            throw ApiError.badRequest('User is already activated', {
                msg: 'User is already activated',
                param: 'activationLink'
            });
        }

        const activatedUser = UserModel.findByIdAndUpdate(user._id, {isActivated: true}, {new: true});

        return activatedUser;
    }
}

export default new UserService();