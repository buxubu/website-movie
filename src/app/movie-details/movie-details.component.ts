import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Movies } from 'src/models/moviesModel';
import { literalMap } from '@angular/compiler';
import {CommonModule} from '@angular/common'
import { Video } from 'src/models/videosModel';
// import videojs  from 'video.js'

@Component({
  selector: 'app-movie-details',
  // standalone: true,
  // imports: [CommonModule,
  //           VgCoreModule,
  //           VgControlsModule,
  //           VgOverlayPlayModule,
  //           VgBufferingModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

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

  lstVideo: Video[] = [];




  ngOnInit(): void {
    this.getIdMovie();
}


getIdMovie(){
  this.route.paramMap.subscribe(data => {
    const id = Number(data.get('id'));
    if(id){
      this.moviesServices.getIdMovie(id).subscribe(result => {
        this.lstMovie = result
      })

      this.moviesServices.getMovieVideo(id).subscribe(result=>{
        this.lstVideo = result
      })
    }
  })
}

}
