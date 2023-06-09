import jwt from 'jsonwebtoken';
import UserDto from '../dtos/user.dto';
import tokenModel from '../models/token.model';

class TokenService{
    generateTokens(payload: object){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, {expiresIn: '30m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {expiresIn: '30d'});

        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token: string){
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET!);

            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token: string){
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET!);

            return userData;
        } catch (e) {
            
        }
    }

    async saveToken(userId: string, refreshToken: string){
        const tokenData = await tokenModel.findOne({user: userId});
        if(tokenData){
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }

        const token = await tokenModel.create({user: userId, refreshToken})

        return token;
    }

    async removeToken(refreshToken: string){
        const token = await tokenModel.findOneAndDelete({refreshToken});

        return token;
    }

    async findToken(refreshToken: string){
        const token = await tokenModel.findOne({refreshToken});

        return token;
    }
}

export default new TokenService();