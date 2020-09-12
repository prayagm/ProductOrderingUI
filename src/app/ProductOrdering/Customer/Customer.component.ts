import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from "src/app/ProductOrdering/Menu/Menu.component";
import { CustomerService } from "./Customer.service";

@Component({
  selector: 'app-Customer',
  templateUrl: './Customer.component.html',
  styleUrls: ['./Customer.component.css']
})
export class CustomerComponent implements OnInit {
  @ViewChild(MenuComponent, { static: true }) menuChild: MenuComponent;

  constructor(
    public restApi: CustomerService
  ) { }

  ngOnInit() {
    this.LoadBaseData();
  }

  LoadBaseData() {
    this.restApi.getAllCustomers().subscribe((data) => {
    });
  }
}
