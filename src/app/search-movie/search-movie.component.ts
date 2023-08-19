import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/models/moviesModel';
import { MoviePaging } from 'src/models/moviePagingModel';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {
  constructor(private movieServices: MoviesService,private route: ActivatedRoute ){}

  lstMovie: MoviePaging ={
    listMovie:[],
    pagings: {
      totalIteams: 0,
      page: 0,
      pageSize: 0,
      currentPage: 0,
      totalPage: 0,
      startPage: 0,
      endPage: 0
    }
  }


  ngOnInit(): void {
    this.searchNameMovie();
  }

  searchNameMovie(){
    this.movieServices._behaviorSubject.subscribe(name =>{
      this.movieServices.searchMovie(this.lstMovie.pagings.page,0,name).subscribe(result =>{
        this.lstMovie = result
      })
    })
  }

  choosePage(page : number){
    this.lstMovie.pagings.page = page;
    this.searchNameMovie();
  }

  onPrevious(){
    this.lstMovie.pagings.page -- ;
    this.searchNameMovie();
  }

  onNext(){
    this.lstMovie.pagings.page ++ ;
    this.searchNameMovie();
  }

  firstPage(){
    this.lstMovie.pagings.page = this.lstMovie.pagings.startPage;
    this.searchNameMovie();
  }

  lastPage(){
    this.lstMovie.pagings.page = this.lstMovie.pagings.endPage;
    this.searchNameMovie();
  }



  // searchMovie(){
  //   const name = String(this.route.snapshot.paramMap.get('name'));
  //   this.movieServices.searchMovie(name).subscribe(data =>{
  //     this.lstMovieGenre = data
  //   })
  // }



}
