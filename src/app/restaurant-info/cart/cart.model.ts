import { MenuModel } from "../menu-item/menu.model";

export class CartModel {
  constructor(public menuItem: MenuModel, public quantity: number = 1){}

  operation():number {
    return this.menuItem.price * this.quantity;
  }
}
