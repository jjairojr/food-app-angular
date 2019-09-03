import { Injectable } from '@angular/core';
import { CartModel } from './cart.model';
import { MenuModel } from '../menu-item/menu.model';

@Injectable()

export class CartService {
  items: CartModel[] = [];
  clear() {
    this.items = [];
  }

  addItem(item: MenuModel) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
    if(foundItem){
      foundItem.quantity = foundItem.quantity + 1;
    }else{
      this.items.push(new CartModel(item));
    }
  }

  removeItem(item: CartModel) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total():number {
    return this.items.map(item => item.operation()).reduce((prev, operation) => prev+operation, 0)
  }
  constructor() { }

}
