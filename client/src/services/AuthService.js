import $api from "../http";

export default class AuthService {
    static async login(email, password) {
        return $api.post('/user/login', { email, password });
    }

    static async registration(name, email, password) {
        return $api.post('/user/registration', { name, email, password });
    }

    static async logout(email, password) {
        return $api.post('/user/logout');
    }
}