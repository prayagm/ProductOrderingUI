import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from "src/app/ProductOrdering/Menu/Menu.component";
import { CustomerService } from "./Customer.service";
import * as AppConstant from "src/app/AppConstants";

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

  CustomerGridData: any = [];
  gridPageSize = AppConstant.GridPageSize;
  customerGridCols: any = [];

  ngOnInit() {
    this.LoadBaseData();
  }

  LoadBaseData() {
    this.restApi.getAllCustomers().subscribe((data: { Result }) => {
      if (data && data.Result) {
        if (data.Result[1] == "Success" && data.Result[2] == 200) {
          if (data.Result[0].length > 0) {
            this.CustomerGridData = data.Result[0];
            debugger;
          }
        }
      }
    });

    this.customerGridCols = [
      { field: "ContactName", header: "Contact Name" },
      { field: "ContactTitle", header: "Contact Title" },
      { field: "CompanyName", header: "Company Name" },
      { field: "City", header: "City" },
      { field: "Region", header: "Region" },
      { field: "PostalCode", header: "Postal Code" },
      { field: "Country", header: "Country" },
      { field: "Phone", header: "Phone" },
      { field: "CustomerType", header: "Customer Type" }
    ];
  }

  updateFacility(customerData) {

  }

  deleteFacility(customerId) {

  }
}
