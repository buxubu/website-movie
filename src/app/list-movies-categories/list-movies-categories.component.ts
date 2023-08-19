import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/models/categoryModel';
import { Movies } from 'src/models/moviesModel';

@Component({
  selector: 'app-list-movies-categories',
  templateUrl: './list-movies-categories.component.html',
  styleUrls: ['./list-movies-categories.component.css']
})
export class ListMoviesCategoriesComponent {
  constructor(private moviesServies: MoviesService, private route: ActivatedRoute, private router: Router){}
  lstMoviesCategory: Movies[];
  lstCate: Category = {
    idCategory: 0,
    nameCategory: ''
  };

  ngOnInit(): void {
    this.getMoviesCategories();
  }

  getMoviesCategories(){
    this.route.paramMap.subscribe(data => {
      const id = Number(data.get('id'))
      console.log(id)
      if(id){
        this.moviesServies.getMoviesCategories(id).subscribe(data=>{
         this.lstMoviesCategory = data
        })

        this.moviesServies.getNameCate(id).subscribe(result=>{
          this.lstCate = result
        })
      }
    })
  }
}
