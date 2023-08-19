import { Category } from "./categoryModel"
import { Company } from "./companiesModel"
import { Country } from "./countriesModel"
import { Director } from "./directorsModel"
import { Genre } from "./genresModel"
import { Language } from "./languagesModel"
import { MovieCast } from "./movieCastModel"
import { Video } from "./videosModel"

export interface Movies{
    idMovie: number
    nameMovie: string
    showtimes: number
    description: string
    trending: boolean
    releaseDate: string
    tagline: string
    movieStatus: string
    images: string
    idCategory: number
    trailerMovie: string
  }
