import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {NewsResponse} from "../model/news-response.model";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:8080/api/news';

  constructor(private http: HttpClient) { }

  getNews(): Observable<NewsResponse> {
    console.log('getNews', this.apiUrl);
    console.log('getNews', this.http.get<NewsResponse>(this.apiUrl));
    return this.http.get<NewsResponse>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Er is een onbekende fout opgetreden bij het ophalen van het nieuws.';
    if (error.error instanceof ErrorEvent) {
      // Client-side of netwerk fout
      errorMessage = `Fout: ${error.error.message}`;
    } else {
      // Backend retourneerde een onsuccesvolle response code.
      errorMessage = `Fout ${error.status}: ${error.error}`;
    }
    console.error('Error occurred:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
