import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from "src/app/ProductOrdering/Menu/Menu.component";

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(MenuComponent, { static: true }) menuChild: MenuComponent;

  constructor() { }

  ngOnInit() {
  }

}
