import { AngularGameReviewService } from '../angular-game-review.service';
import { Component, OnInit } from '@angular/core';

export class Review{
  game!: string;
  description!: string;
  avgscore!: number
}
@Component({
  selector: 'app-home-list',
  standalone: false,
  providers:[AngularGameReviewService],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.css'
})
export class HomeListComponent implements OnInit {
  constructor(private angulargamereviewservice :AngularGameReviewService){}
  reviews: Review[] = []
  private getReviews() : void{
    this.angulargamereviewservice
    .getReviews()
    .then(foundReviews =>{
      this.reviews = foundReviews
    });
  }
  ngOnInit(): void {
    this.getReviews()
  }
}
