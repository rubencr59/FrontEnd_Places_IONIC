export class Reserve{

    private static idReserve: number = 0;

    private id: number;

    private idPlace: number;

    private idUser: number;

    private date: Date;

    constructor(idPlace:number, idUser:number){

        this.id = Reserve.idReserve++;

        this.idPlace = idPlace;

        this.idUser = idUser;

        this.date = new Date();

    }


    public getId(): number{

        return this.id;

    }

    public getIdPlace(): number{

        return this.idPlace;

    }


    public getIdUser(): number{

        return this.idUser;

    }


    public getDate(): Date{

        return this.date;

    }
}