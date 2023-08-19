import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/models/moviesModel';
import { Video } from 'src/models/videosModel';

@Component({
  selector: 'app-episode-movie',
  templateUrl: './episode-movie.component.html',
  styleUrls: ['./episode-movie.component.css']
})
export class EpisodeMovieComponent {
  constructor( private moviesServices: MoviesService, private route: ActivatedRoute, private router: Router){}

  lstMovie: Movies = {
    idMovie: 0,
    nameMovie: '',
    showtimes: 0,
    description: '',
    trending: false,
    releaseDate: '',
    tagline: '',
    movieStatus: '',
    images: '',
    idCategory: 0,
    trailerMovie: ''
  };

  objVideo: Video = {
    idVideo: 0,
    nameVideo: '',
    episode: 0,
    idMovie: 0
  }

  lstVideo: Video[] = [];


  ngOnInit(): void {
    this.showVideo();
}

  showVideo(){
    this.route.paramMap.subscribe(data => {
      const idMovie = Number(data.get('idMovie'));
      if(idMovie){
        this.moviesServices.getIdMovie(idMovie).subscribe(result => {
          this.lstMovie = result
        })

        this.moviesServices.getMovieVideo(idMovie).subscribe(result =>{
          this.lstVideo = result
        })
      }

      const idVideo = Number(data.get('idVideo'));
        if(idVideo){
          this.moviesServices.getVideoMovie(idVideo).subscribe(result=>{
            this.objVideo = result
          })
        }

    })
  }


}
