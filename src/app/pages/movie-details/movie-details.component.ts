import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExternalIDS } from 'src/app/interfaces/external-ids';
import { Keyword } from 'src/app/interfaces/keywords';
import { MovieDetails } from 'src/app/interfaces/movie-response';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: MovieDetails;
  @Input() social : ExternalIDS;
  @Input() keywords: Keyword[];
  data: MovieDetails;

  constructor(private router: Router) { }

  ngOnInit(): void {
  
  
  }

}
