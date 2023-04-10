export default class UserDto {
    id: string;
    name: string;
    email: string;
    address: string;
    isActivated: boolean;
    role: string;
    lang: string;

    constructor(model: any) {
        this.id = model.id;
        this.name = model.name;
        this.email = model.email;
        this.address = model.address;
        this.isActivated = model.isActivated;
        this.role = model.role;
        this.lang = model.lang;
    }

}