import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostResponse} from "../model/post-response.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostResponse[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<PostResponse[]>(this.apiUrl, { headers });
  }
}
