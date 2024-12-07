import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { HomeListComponent } from './home-list/home-list.component';
import { DistancePipe } from './distance.pipe';

imports: [
  BrowserModule,
  HttpClientModule
]
@NgModule({
  declarations: [
    HomeListComponent,
    DistancePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeListComponent]
})
export class AppModule { }
