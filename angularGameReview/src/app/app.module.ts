import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { HomeListComponent } from './home-list/home-list.component';
import { AngularGameReviewService } from './angular-game-review.service';
imports: [
  BrowserModule,
  HttpClientModule
]
@NgModule({
  declarations: [
    HomeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeListComponent]
})
export class AppModule {}
