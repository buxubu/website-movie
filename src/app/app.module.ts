import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListMoviesCategoriesComponent } from './list-movies-categories/list-movies-categories.component';
import { ListMoviesGenreComponent } from './list-movies-genre/list-movies-genre.component';
import { ListMoviesCountryComponent } from './list-movies-country/list-movies-country.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EpisodeMovieComponent } from './episode-movie/episode-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListMoviesComponent,
    MovieDetailsComponent,
    ListMoviesCategoriesComponent,
    ListMoviesGenreComponent,
    ListMoviesCountryComponent,
    SearchMovieComponent,
    EpisodeMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
