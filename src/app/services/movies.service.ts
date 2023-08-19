import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable, map, tap, throwIfEmpty } from 'rxjs';
import { Movies } from 'src/models/moviesModel';
import { Genre } from 'src/models/genresModel';
import { Reponse } from 'src/models/reponseModel';
import { Category } from 'src/models/categoryModel';
import { Video } from 'src/models/videosModel';
import { Country } from 'src/models/countriesModel';
import { MoviePaging } from 'src/models/moviePagingModel';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public _behaviorSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }
  readonly baseApi = environment.baseUrl;

  public sendString(msg: string){
    this._behaviorSubject.next(msg);
  }

  getListMovie(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.baseApi + '/Movies/getAllMovies');
  }

  getIdMovie(id : number):Observable<Movies>{
    return this.http.get<Movies>(this.baseApi + '/Movies/getIdMovie?idMovie=' + id);
  }

  getGenres():Observable<Genre[]>{
    return this.http.get<Genre[]>(this.baseApi +'/Genres/getAllGenres');
  }

  getTrenMovies():Observable<Movies[]>{
    return this.http.get<Movies[]>(this.baseApi + '/Movies/getTrenMovie');
  }

  getSeriesMovies():Observable<Movies[]>{
    return this.http.get<Movies[]>(this.baseApi + '/Movies/getSeriesMovie');
  }

  getCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseApi + '/Categoris/getAlllCategories');
  }

  getMoviesCategories(idCate: number):Observable<Movies[]>{
    return this.http.get<Movies[]>(this.baseApi + '/Movies/getMoviesCategory?idCategories=' + idCate);
  }

  getNameCate(idCate: number):Observable<Category>{
    return this.http.get<Category>(this.baseApi + '/Movies/getNameCate?idCate=' + idCate);
  }

  getVideo(idMovie: number):Observable<Video>{
    return this.http.get<Video>(this.baseApi + '/Movies/getVideo?idMovie=' + idMovie);
  }

  getMovieGenre(idGenre: number):Observable<Movies[]>{
    return this.http.get<Movies[]>(this.baseApi + '/Movies/getMovieGenres?idGenres=' + idGenre);
  }

  getCountries():Observable<Country[]>{
    return this.http.get<Country[]>(this.baseApi + '/Countries/getAllCountries');
  }

  getMovieCountry(idCountry : number):Observable<Movies[]>{
    return this.http.get<Movies[]>(this.baseApi + '/Movies/getMovieCountry?idCount=' + idCountry);
  }

  searchMovie(page:number ,pageSize: number,name: string):Observable<MoviePaging>{
    return this.http.get<MoviePaging>(this.baseApi + '/Movies/seachPaging?page=' + page + '&pageSize=' + pageSize + '&nameMovie=' + name);
  }

  getMovieVideo(idMovie: number):Observable<Video[]>{
    return this.http.get<Video[]>(this.baseApi + '/Movies/getMovieVideo?idMovie=' + idMovie);
  }

  getVideoMovie(idVideo : number):Observable<Video>{
    return this.http.get<Video>(this.baseApi + '/Videos/getVideo?idVideo=' + idVideo)
  }

}
