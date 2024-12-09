import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpHeaders } from '@angular/common/http';
import { HomeListComponent } from './home-list/home-list.component';
import { AngularGameReviewService } from './angular-game-review.service';
import { provideHttpClient } from '@angular/common/http';
imports: [
  BrowserModule
]
@NgModule({
  declarations: [
    HomeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [HomeListComponent]
})
export class AppModule {}
