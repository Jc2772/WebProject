import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Review } from './home-list/home-list.component';
@Injectable({
  providedIn: 'root'
})
export class AngularGameReviewService {
  private apiBaseurl = 'http://localhost:3000/api';
  public async getReviews(): Promise<Review[]> {
    const url : string = `${this.apiBaseurl}/reviews`;
    return this.http
    .get(url)
    .toPromise()
    .then(response => {return response as Review[]})
    .catch(this.handleError)
  }
  private handleError(error: any): Promise<any>{
    console.error('Something has gone Wrong',error)
    return Promise.reject(error.message || error)
  }
  constructor(private http: HttpClient) { }
}
