import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import * as AppConstant from 'src/app/AppConstants';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  baseURL = AppConstant.BaseServiceURL;

  GetESRecordApiURL = this.baseURL + '/' ;//+ AppConstant.GetESReportData;

  constructor(private http: HttpClient) {}

  getAllCategoryData(studyType: string) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    var url = this.GetESRecordApiURL + '/' + studyType;

    const value = this.http.get(url, {
      headers: headers,
    });
    return value;
  }
}
