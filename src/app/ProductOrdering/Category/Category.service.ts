import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import * as AppConstant from 'src/app/AppConstants';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  baseURL = AppConstant.BaseServiceURL;

  GetCategoryRecordApiURL = this.baseURL + '/' + AppConstant.GetCategoryData;

  constructor(private http: HttpClient) {}

  getAllCategoryData() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    var url = this.GetCategoryRecordApiURL;

    const value = this.http.get(url, {
      headers: headers,
    });
    return value;
  }
}
