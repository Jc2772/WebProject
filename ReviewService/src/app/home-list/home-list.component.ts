import {ReviewService} from '../review-service.service'
import { Component, OnInit } from '@angular/core';
export class Review{
  game!: string;
  description!: string;
  avgscore!: number
}
@Component({
  selector: 'app-home-list',
  standalone: false,
  
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.css',
  providers:[ReviewService]
})
export class HomeListComponent implements OnInit {
  constructor(private reviewservice :ReviewService){}
  reviews: Review[] = []
  private getReviews() : void{
    this.reviewservice
    .getReviews()
    .then(foundReviews =>{
      this.reviews = foundReviews
    });
  }
  ngOnInit(): void {
    this.getReviews()
  }
}
