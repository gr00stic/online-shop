import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import ApiError from "../models/error.model";
import UserModel from "../models/user.model";
import mailService from "./mail.service";
import tokenService from "./token.service";
import UserDto from "../dtos/user.dto";

class UserService {
    async isUserExists(email: string){
        const user = await UserModel.findOne({email: email});

        if(user){
            throw ApiError.badRequest('User with this email already exists', {
                msg: 'User with this email already exists',
                param: 'email'
            });
        }

        return user;
    }

    async registration(name: string, email: string, password: string){
        await this.isUserExists(email);

        const hashPassword = await bcrypt.hash(password, 4);
        const activationLink = v4();

        const user = await UserModel.create({name, email, password: hashPassword, activationLink});

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        

        return {user: userDto, ...tokens};
    }
}

export default new UserService();