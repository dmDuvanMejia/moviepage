import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/billboard-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  movies:Movie[] = []
  moviesSlideShow:Movie[] = []
  @HostListener('window:scroll', ['$event'])

  onScroll() {
    const position = (document.documentElement.scrollTop || document.body.scrollTop) + 1100
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight )

    if ( position > max ) {
      if (this.moviesService.loading) {return}
      this.moviesService.getBillboard().subscribe(movies => {
        this.movies.push(...movies)
      })
    }

  }

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getBillboard().subscribe(movies => {
      this.movies = movies
      this.moviesSlideShow = movies
    })
  }

  ngOnDestroy() {
    this.moviesService.resetBillboardPage()
  }

}
