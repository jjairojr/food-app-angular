import { Component, OnInit, Input } from '@angular/core';
import { RestaurantModel } from './restaurant-detals.model';

@Component({
  selector: 'mt-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  @Input() restaurant: RestaurantModel[]

  constructor() { }
  ngOnInit() {
  }

}
