import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Movies } from 'src/models/moviesModel';
import { Genre } from 'src/models/genresModel';
import { Reponse } from 'src/models/reponseModel';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent {
  constructor(private moviesServices: MoviesService) { }
  listMovie: Movies[];
  lstGenres: Genre[]=[];
  lstTrenMovies: Movies[]=[];
  lstSeriesMovies: Movies[] =[];

  ngOnInit(): void {
    this.getLstMovies();
    this.getLstGenres();
    this.getTrenMovies();
    this.getSeriesMovies();
  }

  getLstGenres(){
    this.moviesServices.getGenres().subscribe(data => {
      this.lstGenres = data
    })
  }

  getLstMovies(){
    this.moviesServices.getListMovie().subscribe(data=> {
      this.listMovie = data
    })
  }

  getTrenMovies(){
    this.moviesServices.getTrenMovies().subscribe(data=>{
      this.lstTrenMovies = data
    })
  }

  getSeriesMovies(){
    this.moviesServices.getSeriesMovies().subscribe(data=>{
      console.log(data)
      this.lstSeriesMovies = data
    })
  }

}
