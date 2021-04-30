import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

import { Cast } from 'src/app/interfaces/credits-response';
import { ExternalIDS } from 'src/app/interfaces/external-ids';
import { MovieDetails } from 'src/app/interfaces/movie-response';
import { Result } from 'src/app/interfaces/movie-video';
import { Keyword } from 'src/app/interfaces/keywords';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: MovieDetails
  cast: Cast[] = []
  social: ExternalIDS
  videos: Result[] = []
  video: SafeUrl
  urlVideo: string = 'https://www.youtube.com/embed/'
  keywords: Keyword[] = [];
  recommendations: any;
  

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService,
    private location: Location, private router: Router, private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params
    combineLatest([
      this.moviesService.getMovieDetails(id),
      this.moviesService.getCasting(id),
      this.moviesService.getExternalIds(id),
      this.moviesService.getMovieTrailer(id),
      this.moviesService.getKeywords(id),
      this.moviesService.getRecommendations(id)
    ]).subscribe(([movie, cast, social, videos, keywords, recommendations]) => {
      if (!movie) {
        this.router.navigateByUrl('/home')
        return
      }
      this.movie = movie
      this.cast = cast.filter(data => data.profile_path !== null)
      this.social = { ...social }
      this.videos = videos
      this.video = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.urlVideo}${this.videos[0].key}`)
      this.keywords = keywords
      this.recommendations = recommendations.results
    })
  }

  back() {
    this.location.back()
  }

  onRewiewMovieClick(id:string) {
    this.router.navigate(['/review', id])
  }

}
