import { Component, OnInit, Input } from '@angular/core';
import { MenuModel } from '../menu-item/menu.model';
import { CartService } from './cart.service';
import { CartModel } from './cart.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(private cartService: CartService) { }

  ngOnInit() {}

  items(): any[] {
    return this.cartService.items;
  }

  cleanCart() {
    this.cartService.clear();
  }

  total(): number {
    return this.cartService.total();
  }

  removeItem(item: any) {
    this.cartService.removeItem(item)
  }
  addItem(item: any) {
    this.cartService.addItem(item);
  }
  constructor() { }

  ngOnInit() {
  }
}
