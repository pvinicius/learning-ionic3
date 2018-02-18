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
  private imagePath: string = "https://image.tmdb.org/t/p/";
  private videoPath: string = "";
  private ptBR = "language=pt-BR";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }
  getLatestMovies(page = 1) {
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=` + this.getApiKey());
  }
  getMovieDetails(filmeId) {
    return this.http.get(this.baseApiPath + `/movie/${filmeId}?api_key=` + this.getApiKey());
  }
  getCountMovieGener() {
    return this.http.get(this.baseApiPath + `` + this.getApiKey());
  }
  getApiKey(): string {
    return "0ea9d170549c0a5ff57462b905492aca";
  }
}
