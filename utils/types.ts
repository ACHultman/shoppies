type IRated = 'PG' | 'PG-13' | 'R'

type showType = 'movie' | 'series' | 'episode'

interface IRatings {
  Source: string
  Value: string
}
export interface IMovieLong extends IMovieShort {
  Rated: IRated
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Ratings: IRatings[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export interface IMovieShort {
  Title: string
  Year: string
  imdbID: string
  Type: showType
  Poster: string
}
