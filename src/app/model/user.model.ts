import { Place } from "./place.model";

export class User{

    static idUser: number = 0;

    private id: number;

    private userName: string;

    private userPassword: string;


    constructor(name: string, password: string){

        this.id = User.idUser++;

        this.userName = name;

        this.userPassword = password;

    }

    public getId(): number{

        return this.id;

    }

    public getName(): string{

        return this.userName;

    }

    public getPassword(): string{

        return this.userPassword;

    }

}