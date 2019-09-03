import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from './restaurant-details/restaurant-detals.model';
import { RestaurantService } from './restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { MenuModel } from 'app/restaurant-info/menu-item/menu.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants: RestaurantModel[];
  teste: RestaurantModel;
  menu: MenuModel[];

  constructor(private restaurantService: RestaurantService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurants().subscribe(restaurantAPI => this.restaurants = restaurantAPI);
  }
}
