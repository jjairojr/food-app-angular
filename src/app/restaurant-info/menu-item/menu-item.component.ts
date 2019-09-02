import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuModel } from './menu.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuModel;
  @Output() add = new EventEmitter ();

  constructor() { }

  ngOnInit() {
  }

  emitAdd() {
    this.add.emit(this.menuItem);
  }
}
