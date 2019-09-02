import { Component, OnInit } from '@angular/core';
import { MenuModel } from '../menu-item/menu.model';
import { RestaurantService } from 'app/restaurant/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private restaurantService: RestaurantService,
              private activatedRoute: ActivatedRoute) { }

  menu: Observable<MenuModel[]>;
  ngOnInit() {
    this.menu = this.restaurantService.menuInfo(this.activatedRoute.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuModel) {
    console.log(item);
  }

}
