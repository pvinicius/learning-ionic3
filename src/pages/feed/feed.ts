import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { MovieDetailsPage } from '../movie-details/movie-details';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ],
})
export class FeedPage {

  public json_feed: any = {
    title: "Pedro Correia",
    date: "November 5,1995",
    description: "Estou criando um app incrível...",
    qtde_likes: 12,
    qtde_comments: 4,
    time_comment: "11h ago"
  };

  public lista_movies: any;
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;
  public page = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController) {
  }
  // ionViewDidLoad() -> like ready //


  showLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();
  }
  hideLoading() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }
  doInfinite(InfiniteScroll) {
    this.page++;
    this.infiniteScroll = InfiniteScroll;
    this.carregarFilmes(true);
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  carregarFilmes(newPage: boolean = false) {
    this.showLoading();
    this.movieProvider.getLatestMovies(this.page).subscribe(
      (data: any) => {
        console.log(newPage)
        if (newPage) {
          this.lista_movies = this.lista_movies.concat(data.results);
          this.infiniteScroll.complete();
        }
        else {
          this.lista_movies = data.results;
        }

        this.hideLoading();

        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      },
      (error) => {
        console.log(error);
        this.hideLoading();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      })
  }
  openDetails(movie) {
    this.navCtrl.push(MovieDetailsPage, { id: movie.id });
  }
}
