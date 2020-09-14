import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as AppConstant from "src/app/AppConstants";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseURL = AppConstant.BaseServiceURL;

  getAllCustomersURL = this.baseURL + "/" + AppConstant.GetAllCustomers;

  getCustomerDataByIdURL = this.baseURL + "/" + AppConstant.GetCustomerDataById;

  insertNewCustomerURL = this.baseURL + "/" + AppConstant.InsertNewCustomer;

  updateCustomerURL = this.baseURL + "/" + AppConstant.UpdateCustomer;

  deleteCustomerURL = this.baseURL + "/" + AppConstant.DeleteCustomer;

constructor(private http: HttpClient) { }

getAllCustomers() {
  let headers = new HttpHeaders();
  headers.append("Content-Type", "application/json");

  var url = this.getAllCustomersURL;

  const value = this.http.get(url, {
    headers: headers
  });
  return value;
}

getCustomerDataById(customerId: number) {
  let headers = new HttpHeaders();
  headers.append("Content-Type", "application/json");

  var url = this.getCustomerDataByIdURL + "/" + customerId;

  const value = this.http.get(url, {
    headers: headers
  });
  return value;
}

insertNewCustomer(InsertData: any) {
  let headers = new HttpHeaders();
  headers.append("Content-Type", "application/json");

  const value = this.http.post(
    this.insertNewCustomerURL,
    InsertData,
    {
      headers: headers
    }
  );
  return value;
}

updateCustomer(UpdateData: any) {
  let headers = new HttpHeaders();
  headers.append("Content-Type", "application/json");

  const value = this.http.post(
    this.updateCustomerURL,
    UpdateData,
    {
      headers: headers
    }
  );
  return value;
}

deleteCustomer(customerId: number) {
  let headers = new HttpHeaders();
  headers.append("Content-Type", "application/json");

  var url = this.deleteCustomerURL + "/" + customerId;

  const value = this.http.get(url, {
    headers: headers
  });
  return value;
}

}