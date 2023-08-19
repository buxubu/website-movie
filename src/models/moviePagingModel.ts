import { Movies } from "./moviesModel"
import { Pagings } from "./pagingsModel"

export interface MoviePaging {
  listMovie: Movies[]
  pagings: Pagings
}
