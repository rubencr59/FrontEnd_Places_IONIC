import { Injectable } from '@angular/core';
import { Reserve } from '../model/reserve.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReserveService {

    private reserves: Reserve[] = [];

    private reservesObservable: Subject<Reserve[]>;
    

    constructor() { 
        this.reservesObservable = new Subject<Reserve[]>();
    }


    getReservesObservable(){
        return this.reservesObservable.asObservable();
    }

    addReserve(placeId: number, userId: number){
        this.reserves.push(new Reserve(placeId, userId));
        this.reservesObservable.next(this.reserves);
    }


    removeReserve(reserveId: number){
        this.reserves.forEach((eachreserve, index) => {
            if(eachreserve.getId() == reserveId){
                this.reserves.splice(index, 1);
                this.reservesObservable.next(this.reserves);
            }
        });
    }

    getReservesByUserId(userId: number): Reserve[]{
        let userReserves: Reserve[] = [];
        this.reserves.forEach(eachreserve => {
            if(eachreserve.getIdUser() == userId){
                userReserves.push(eachreserve);
            }
        });

        return userReserves;
    }

    

}