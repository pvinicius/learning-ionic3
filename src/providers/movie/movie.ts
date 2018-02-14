import { HttpClient } from '@angular/common/http';
import { Injectable, keyframes } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath: string = "https://api.themoviedb.org/3";
  public imagePath: string = "https://image.tmdb.org/t/p/";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }
  getLatestMovies(page = 1) {
    return this.http.get(this.baseApiPath + `/movie/popular?language=pt-BR&page=${page}&api_key=` + this.getApiKey());
  }
  getMovieDetails(filmeId) {
    return this.http.get(this.baseApiPath + `/movie/${filmeId}?api_key=` + this.getApiKey());
  }
  getApiKey(): string {
    return "0ea9d170549c0a5ff57462b905492aca";
  }
}
