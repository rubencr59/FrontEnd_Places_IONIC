import { Component, OnInit } from '@angular/core';
import { ReserveService } from '../service/reserve.service';
import { Reserve } from '../model/reserve.model';
import { UserService } from '../service/user.service';
import { PlacesService } from '../service/places.service';
import { Place } from '../model/place.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {


  placesReserved: Place[];
  
  constructor(private reserveService:ReserveService, private userService:UserService, private placesService:PlacesService) { }


  ngOnInit() {
    const reservesByUser = this.reserveService.getReservesByUserId(this.userService.getActualUser().getId());

    this.placesService.getPlaces().subscribe(places => {
      this.placesReserved = places.filter( place => reservesByUser.some(reserve => reserve.getIdPlace() === place.getId()));
    });

    console.log(this.placesReserved);
  }


  getAllPlacesReserved(){


  }

}
