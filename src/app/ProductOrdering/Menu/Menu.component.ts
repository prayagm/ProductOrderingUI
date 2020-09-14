import { Component, OnInit } from '@angular/core';
import * as AppConstant from "src/app/AppConstants";
import { Router } from "@angular/router";

@Component({
  selector: 'app-Menu',
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToCustomers() {
    this.router.navigate([AppConstant.CustomersRoute]);
  }

  goToHomePage() {
    this.router.navigate([AppConstant.HomePageRoute]);
  }

  goToCategories() {
    this.router.navigate([AppConstant.CategoriesRoute]);
  }

  goToProducts() {
    this.router.navigate([AppConstant.ProductsRoute]);
  }
}
