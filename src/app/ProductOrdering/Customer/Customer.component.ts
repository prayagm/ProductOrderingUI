import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from "src/app/ProductOrdering/Menu/Menu.component";

@Component({
  selector: 'app-Customer',
  templateUrl: './Customer.component.html',
  styleUrls: ['./Customer.component.css']
})
export class CustomerComponent implements OnInit {
  @ViewChild(MenuComponent, { static: true }) menuChild: MenuComponent;

  constructor() { }

  ngOnInit() {
  }

}
