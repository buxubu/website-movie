import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ListMoviesCategoriesComponent } from './list-movies-categories/list-movies-categories.component';
import { ListMoviesGenreComponent } from './list-movies-genre/list-movies-genre.component';
import { ListMoviesCountryComponent } from './list-movies-country/list-movies-country.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { EpisodeMovieComponent } from './episode-movie/episode-movie.component';



const routes: Routes = [
  {path: '',redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: ListMoviesComponent},
  {path: 'movies/moviedetail/:id', component: MovieDetailsComponent},
  {path: 'movies/moviesCategories/:id', component: ListMoviesCategoriesComponent },
  {path: 'movies/moviesGenres/:id', component: ListMoviesGenreComponent},
  {path: 'movies/moviesCountries/:id', component: ListMoviesCountryComponent},
  {path: 'movies/searchMovie/:name', component: SearchMovieComponent},
  {path: 'moviedetail/:idMovie/:idVideo', component: EpisodeMovieComponent},
  {path: '**', component: ListMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
