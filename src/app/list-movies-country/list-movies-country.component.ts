import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/models/moviesModel';

@Component({
  selector: 'app-list-movies-country',
  templateUrl: './list-movies-country.component.html',
  styleUrls: ['./list-movies-country.component.css']
})
export class ListMoviesCountryComponent {

  constructor(private moviesServies: MoviesService, private route: ActivatedRoute, private router: Router){}

  lstMovieGenre: Movies[];

  ngOnInit(): void {
    this.getMovieCountry();
  }

  getMovieCountry(){
    this.route.paramMap.subscribe(data=>{
      const id = Number(data.get('id'))
      if(id){
        this.moviesServies.getMovieCountry(id).subscribe(result=>{
          this.lstMovieGenre = result
        })
      }
    })
  }
}
