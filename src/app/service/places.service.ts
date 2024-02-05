import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Place } from '../model/place.model';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private placesSubject: Subject<Place[]>;
  private _places: Place[] = [
    new Place(
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      149.99,
      1
    ),
    new Place(
      "L'Amour Toujours",
      'A romantic place in Paris!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
      189.99,
      1
    ),
    new Place(
      'The Foggy Palace',
      'Not your average city trip!',
      'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
      99.99,
      1
    )
  ];

  constructor() {
    this.placesSubject = new Subject<Place[]>();
  }
  


  getPlaces(): Observable<Place[]> {
    return this.placesSubject.asObservable();
  }

  updateAllPlaces() {
    this.placesSubject.next(this._places);
  }


  getPlace(id: number): Observable<Place | undefined> {
    return this.placesSubject.pipe(
      map(places => places.find(place => place.getId() === id))
    );
  }

  getPlacesById(ids: number[]): Observable<Place[]> {
    return this.placesSubject.pipe(
      map(places => places.filter(place => ids.includes(place.getId())))
    );
  }

  
}
