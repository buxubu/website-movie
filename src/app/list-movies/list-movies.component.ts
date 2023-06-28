import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { HttpClient } from '@angular/common/http';
import { MoviesModel } from 'src/models/moviesModel';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent {
  constructor(private moviesServices: MoviesService) { }
  listMovie: MoviesModel[] = [];

  ngOnInit(): void {
    this.moviesServices.getListMovie().subscribe(data => {
      this.listMovie = data
      console.log(data)
    })
  }
}
