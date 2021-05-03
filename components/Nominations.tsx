import React from 'react'
import { IMovieLong } from '../utils/types'
import Movie from './movies/Movie'

const Nominations = ({
  nominations,
}: {
  nominations: IMovieLong[]
}): JSX.Element => {
  return (
    <div>
      <div>
        <h1>Nominations</h1>
      </div>
      <div className="flex flex-col">
        {nominations &&
          nominations.map((nom, idx) => {
            return (
              <div key={idx} className="flex">
                <div>
                  <Movie
                    imdbID={nom.imdbID}
                    Poster={nom.Poster}
                    Title={nom.Title}
                    Year={nom.Year}
                    Type={nom.Type}
                  />
                </div>
                <p>{nom.Plot}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Nominations
