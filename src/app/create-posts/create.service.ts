import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostRequestModel} from "../model/post-request.model";
import {CategoryRequestModel} from "../model/category-request.model";
import {PostResponse} from "../model/post-response.model";

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

    createPost(postData: any): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/posts`, postData, { headers });
  }

  getAllCategories(): Observable<CategoryRequestModel[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<CategoryRequestModel[]>(`${this.apiUrl}/category`, { headers });
  }
}
