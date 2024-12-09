import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Review } from './home-list/home-list.component';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AngularGameReviewService {
  private apiBaseurl = 'http://localhost:3000/api';
  public async getReviews(): Promise<Review[]> {
    const url : string = `${this.apiBaseurl}/reviews`;
    try{
      return await firstValueFrom(this.http.get<Review[]>(url))
    }
    catch(error){
      console.error('Something has gone Wrong',error)
      return Promise.reject(error)
    }
  }
  constructor(private http: HttpClient) { }
}
