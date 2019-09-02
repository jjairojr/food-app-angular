import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurant/restaurant.service';
import { RestaurantModel } from 'app/restaurant/restaurant-details/restaurant-detals.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {

  constructor(private restaurantService: RestaurantService,
              private activatedRoute: ActivatedRoute) { }
  restaurantInfo: RestaurantModel;

  ngOnInit() {
    this.restaurantService.restaurantsInfo(this.activatedRoute.snapshot.params['id'])
    .subscribe(restaurantAPIbyID => this.restaurantInfo = restaurantAPIbyID);
  }

}
