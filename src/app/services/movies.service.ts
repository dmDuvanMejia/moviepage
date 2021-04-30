import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie, NowPlayingResponse } from '../interfaces/billboard-response';
import { catchError, map, tap } from 'rxjs/operators';
import { MovieDetails } from '../interfaces/movie-response';
import { CreditsResponse, Cast } from '../interfaces/credits-response';
import { ExternalIDS } from '../interfaces/external-ids';
import { MovieVideo, Result } from '../interfaces/movie-video';
import { Keyword, KeyWords } from '../interfaces/keywords';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = 'https://api.themoviedb.org/3'
  private billboardPage = 1
  loading: boolean = false


  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: '42a67ee45ecb4bf75b4e88986b5acadd',
      query: '',
      language: 'en-US',
      page: this.billboardPage.toString()
    }
  }

  getBillboard(): Observable<Movie[]> { 

    if ( this.loading ) {
      return of([])
    }
    this.loading = true
    return this.http.get<NowPlayingResponse>(`${this.baseUrl}/movie/now_playing`, {
      params: this.params
    }).pipe(
      map( (resp) => {console.log(resp.results); return resp.results} ),
      tap( () => {
      this.billboardPage += 1
      this.loading = false
    }) )
  }

  searchMovie(term: string): Observable<Movie[]> {
    const params = {...this.params, page: '1', query: term}
    return this.http.get<NowPlayingResponse>(`${this.baseUrl}/search/movie?`, {
      params
    }).pipe(map(resp => {console.log(resp.results); return resp.results}))
  }

  resetBillboardPage() {
    this.billboardPage = 1
  }

  getMovieDetails(id: string) {
    return this.http.get<MovieDetails>(`${this.baseUrl}/movie/${id}`, {params: this.params})
    .pipe(catchError(err => of(null)))
  }

  getCasting(id: string): Observable<Cast[]> {
    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits?`, {params: this.params})
    .pipe(
      map(resp => {console.log(resp.cast); return resp.cast}),
      catchError(err => of([]))
      )
  }

  getExternalIds(id: string) {
    return this.http.get<ExternalIDS>(`${this.baseUrl}/movie/${id}/external_ids?`, {params: this.params})
  }

  getMovieTrailer(id: string): Observable<Result[]> {
    return this.http.get<MovieVideo>(`${this.baseUrl}/movie/${id}/videos?`, {params: this.params})
    .pipe(map(resp => resp.results), catchError(err => of(null)))
  }

  getKeywords(id: string): Observable<Keyword[]> {
    return this.http.get<KeyWords>(`${this.baseUrl}/movie/${id}/keywords?`, {params: this.params})
    .pipe(map(resp => resp), catchError(err  => of(null)))
  }

  getRewiews(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/movie/${id}/reviews?`, {params: this.params})
    .pipe(map(resp => { return resp}),
    catchError(err => of(null)))
  }

  getRecommendations(id: string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/movie/${id}/recommendations?`, {params: this.params})
    .pipe(map(resp => { return resp}),
    catchError(err => of(null)))
  }
  // getRecommendation(id: string) :O
  
}
