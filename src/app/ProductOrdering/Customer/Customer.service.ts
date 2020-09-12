import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as AppConstant from "src/app/AppConstants";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseURL = AppConstant.BaseServiceURL;

  getAllCustomersURL = this.baseURL + "/" + AppConstant.GetAllCustomers;

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

}
