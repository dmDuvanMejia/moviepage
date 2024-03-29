import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { CastSlideShowComponent } from './cast-slide-show/cast-slide-show.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent, 
    SlideshowComponent, 
    MoviesPosterGridComponent, 
    CastSlideShowComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ],
  exports: [
    NavbarComponent, 
    SlideshowComponent, 
    MoviesPosterGridComponent, 
    CastSlideShowComponent, 
    FooterComponent]
})
export class ComponentsModule { }
