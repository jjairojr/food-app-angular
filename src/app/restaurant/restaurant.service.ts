import { Injectable } from '@angular/core';
import { RestaurantModel } from './restaurant-details/restaurant-detals.model';
import { MEAT_API } from '../app.api';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ErrorHandler } from 'app/app.error';
import { ReviewsModel } from 'app/restaurant-info/review/reviews.model';
import { MenuModel } from 'app/restaurant-info/menu-item/menu.model';


@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  restaurants(): Observable<RestaurantModel[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  restaurantsInfo(id: string): Observable<RestaurantModel> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  menuInfo(id: string): Observable<MenuModel[]> {
    return this.http.get(`${MEAT_API}/restaurant/${id}/menu`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  reviews(id: string): Observable<ReviewsModel[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

}
