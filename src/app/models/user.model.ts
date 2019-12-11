export class UserModel{
    constructor(public name: string = "", public email:string = "", public password: string = ""){}
    build({name, email, password}): UserModel{
        this.name = name;
        this.email = email;
        this.password = password;

        return this;
    }
}