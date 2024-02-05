import { Place } from "./place.model";
import { Reserve } from "./reserve.model";

export class User{

    static idUser: number = 0;

    private id: number;

    private userName: string;

    private userPassword: string;

    private userReserve: Reserve[] = [];


    constructor(name: string, password: string){

        User.idUser++;

        this.id = User.idUser;

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

    public getReserve(): Reserve[]{

        return this.userReserve;

    }


    public addReserve(place: Place, date: Date){

        this.userReserve.push();

    }


}