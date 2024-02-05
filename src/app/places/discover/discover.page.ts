import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { PlacesService } from '../../service/places.service';
import { Place } from '../../model/place.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss']
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[] = [];  // Inicializa con un array vacío

  constructor(
    private placesService: PlacesService,
    private userService: UserService,
    private menuCtrl: MenuController
  ) {}
  
  ngOnInit() {
    this.placesService.getPlaces().subscribe(places => {
      console.log('Loaded Places:', places);
      if (places) {
        this.loadedPlaces = places;
      }
    });

    this.placesService.updateAllPlaces();
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  getUsernamePlace(id: number): string {
    return this.userService.getUserById(id).getName() ;
  }
}
