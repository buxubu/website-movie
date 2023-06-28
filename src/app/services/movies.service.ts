import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { MoviesModel } from 'src/models/moviesModel';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  readonly baseApi = environment.baseUrl;

  getListMovie(): Observable<MoviesModel[]> {
    return this.http.get<MoviesModel[]>(this.baseApi + '/Movies/getAllMovies');
  }
}
