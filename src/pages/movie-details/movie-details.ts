import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
  providers: [MovieProvider]
})
export class MovieDetailsPage {
  public movie;
  public movieId;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public MovieProvider: MovieProvider
  ) { }

  ionViewDidEnter() {
    this.movieId = this.navParams.get("id");
    this.MovieProvider.getMovieDetails(this.movieId).subscribe((data: any) => {
      console.log(data)
      this.movie = data;
    },
      (error => {
        console.log(error);
      }))
  }

}
