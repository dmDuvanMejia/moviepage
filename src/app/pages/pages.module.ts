import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { CastComponent } from './cast/cast.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RewiewsComponent } from './rewiews/rewiews.component';
import { RecommendationComponent } from './recommendation/recommendation.component';


@NgModule({
  declarations: [HomeComponent, MovieComponent, SearchComponent, CastComponent, MovieDetailsComponent, RewiewsComponent, RecommendationComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule
  ],
  exports: []
})
export class PagesModule { }

