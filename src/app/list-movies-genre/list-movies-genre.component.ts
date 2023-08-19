import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/models/moviesModel';

@Component({
  selector: 'app-list-movies-genre',
  templateUrl: './list-movies-genre.component.html',
  styleUrls: ['./list-movies-genre.component.css']
})
export class ListMoviesGenreComponent {
  constructor(private moviesServies: MoviesService, private route: ActivatedRoute, private router: Router){}

  lstMovieGenre: Movies[];

  ngOnInit(): void {
    this.getMovieGenre();
  }

  getMovieGenre(){
    this.route.paramMap.subscribe(data=>{
      const id = Number(data.get('id'))
      if(id){
        this.moviesServies.getMovieGenre(id).subscribe(result=>{
          this.lstMovieGenre = result
          console.log(result)
        })
      }
    })
  }

}
