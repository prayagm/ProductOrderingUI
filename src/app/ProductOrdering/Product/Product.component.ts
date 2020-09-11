import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from "src/app/ProductOrdering/Menu/Menu.component";

@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild(MenuComponent, { static: true }) menuChild: MenuComponent;

  constructor() { }

  ngOnInit() {
  }

}
