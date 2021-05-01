import React from 'react'
import { IMovieShort } from '../../utils/types'
import Movie from './Movie'

const Movies = ({ movies }: { movies: IMovieShort[] }): JSX.Element => {
  return (
    <div>
      <div className="flex flex-wrap px-5 my-10 -mx-2 overflow-hidden">
        {movies.map((movie: IMovieShort, idx: number) => {
          return (
            <div
              key={idx}
              className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5"
            >
              <Movie {...movie} />
            </div>
          )
        })}
      </div>
      <p>End of results</p>
    </div>
  )
}

export default Movies
