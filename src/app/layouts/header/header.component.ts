import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Category } from 'src/models/categoryModel';
import { Country } from 'src/models/countriesModel';
import { Genre } from 'src/models/genresModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private moviesServies: MoviesService, private route: ActivatedRoute, private router: Router){}

  lstCategory: Category[];
  lstGenre: Genre[];
  lstCountry: Country[];

  searchText: string = '';

  ngOnInit(): void {
    this.getCategores();
    this.getAllGenre();
    this.getCountries();
    this.sendNameMovie();
  }

  getCategores(){
    this.moviesServies.getCategory().subscribe(data =>{
      this.lstCategory = data
    })
  }

  getAllGenre(){
    this.moviesServies.getGenres().subscribe(data=>{
      this.lstGenre = data
    })
  }

  getCountries(){
    this.moviesServies.getCountries().subscribe(data => {
      this.lstCountry = data
    })
  }

  sendNameMovie(){
    this.moviesServies.sendString(this.searchText);
  }




}
