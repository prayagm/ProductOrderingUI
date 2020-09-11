import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from "src/app/ProductOrdering/Menu/Menu.component";

@Component({
  selector: 'app-Order',
  templateUrl: './Order.component.html',
  styleUrls: ['./Order.component.css']
})
export class OrderComponent implements OnInit {
  @ViewChild(MenuComponent, { static: true }) menuChild: MenuComponent;

  constructor() { }

  ngOnInit() {
  }

}
