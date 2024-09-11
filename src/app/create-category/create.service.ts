import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CategoryRequestModel} from "../model/category-request.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreateCategoryService {
  private apiUrl = 'http://localhost:8080/api/category';

  constructor(private http: HttpClient) { }

  createCategory(categoryDto: CategoryRequestModel): Observable<CategoryRequestModel> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<CategoryRequestModel>(this.apiUrl, categoryDto, { headers });
  }
}
