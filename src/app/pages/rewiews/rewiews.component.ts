import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from 'src/app/interfaces/movie-response';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-rewiews',
  templateUrl: './rewiews.component.html',
  styleUrls: ['./rewiews.component.css']
})
export class RewiewsComponent implements OnInit {

  // @Input() movie: MovieComponent;
  constructor( private activatedRoute: ActivatedRoute, private service: MoviesService, private location: Location) { }

  reviews: any;
  movie: MovieDetails;
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.service.getRewiews(params['id']).subscribe(rew => {
        this.reviews = rew.results;
      })
      this.service.getMovieDetails(params['id']).subscribe(movie => {
        this.movie = movie;
        console.log('MOVIE ' + JSON.stringify(movie))
      })
    });
  }

  back() {
    this.location.back()
  }

}
