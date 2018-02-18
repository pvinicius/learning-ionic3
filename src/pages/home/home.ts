import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    MovieProvider
  ],
})
export class HomePage {
  private page = 1;
  private genres: any = {
    id: "",
    genre: "",
    image_path: ""
  }
  private lstGenres: any = [
    { id: 28, genre: "Action", image_path: "https://www.nyfa.edu/student-resources/wp-content/uploads/2015/03/action-movie-1024x640.jpg" },
    { id: 12, genre: "Adventure", image_path: "https://i.pinimg.com/originals/cd/8f/43/cd8f43a5e7197eed5ce5b007f732c43b.jpg" },
    { id: 16, genre: "Animation", image_path: "https://i.pinimg.com/originals/99/f7/05/99f705e77084e8f8a01719018bc024bc.jpg" },
    { id: 35, genre: "Comedy", image_path: "https://wallpapersite.com/images/pages/pic_h/123.jpg" },
    { id: 80, genre: "Crime", image_path: "http://2.bp.blogspot.com/-zmicClqZCaw/TzJ97hDDL-I/AAAAAAAAu2U/jrMjkWfg5_0/s1600/Godfather-Wallpapers.jpg" },
    { id: 99, genre: "Documentary", image_path: "https://i.ytimg.com/vi/N0OKK47yo78/maxresdefault.jpg" },
    { id: 18, genre: "Drama", image_path: "http://lbc9.net/movies-and-tv/movie/promised-land/american-drama-promised-land-matt-damon.jpg" },
    { id: 10751, genre: "Family", image_path: "https://i0.wp.com/blog.moviepass.com/wp-content/uploads/marvel_cinematic_universe_wallpaper__2_by_theincrediblejake-d8vkgrv.jpg?fit=1200%2C675&resize=500%2C300" },
    { id: 14, genre: "Fantasy", image_path: "https://wallpapersite.com/images/wallpapers/tomorrowland-5120x2880-george-clooney-fantasy-142.jpg" },
    { id: 36, genre: "History", image_path: "https://vignette.wikia.nocookie.net/mazerunner/images/9/96/2014-Movie-The-Maze-Runner-HD-Wallpaper.jpg/revision/latest?cb=20141108193427" },
    { id: 27, genre: "Horror", image_path: "http://www.alcohollywood.com/wp-content/uploads//ep312-trickrtreatcpf-768x492.jpg" },
    { id: 10402, genre: "Music", image_path: "http://www.cantodosclassicos.com/wp-content/uploads/2016/11/11112016-cantando-na-chuva-1.jpg" },
    { id: 9648, genre: "Mystery", image_path: "https://images.moviepilot.com/image/upload/c_fill,h_470,q_auto:good,w_620/ul4utfwislvhuul652nz.jpg" },
    { id: 10749, genre: "Romance", image_path: "http://mommybrown.com/news/wp-content/uploads/2013/11/Geography-Club.jpg" },
    { id: 878, genre: "Science Fiction", image_path: "https://i.ytimg.com/vi/Dw36o0dwYdo/maxresdefault.jpg" },
    { id: 10770, genre: "TV Movie", image_path: "http://files.all-free-download.com//downloadfiles/wallpapers/2560_1600/chuck_tv_series_wallpaper_chuck_movies_838.jpg" },
    { id: 53, genre: "Thriller", image_path: "http://www.wallcoo.net/movie/2009_05_Angels_and_Demons/images/Angels_and_Demons_wp_9.jpg" },
    { id: 10752, genre: "War", image_path: "https://media2.fdncms.com/orlando/imager/u/magnum/5651129/gal_dunkirk-2017-movie-nolan-war.jpg" },
    { id: 37, genre: "Western", image_path: "https://wallpaper.wiki/wp-content/uploads/2017/05/wallpaper.wiki-Old-Western-Background-PIC-WPD00109.jpg" }
  ];

  constructor(
    public navCtrl: NavController,
    private movieProvider: MovieProvider) {
  }
  ionViewDidLoad() {
  }
 
}
