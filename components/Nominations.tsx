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
        <h1 className="text-4xl mb-10 ml-5">Nominations</h1>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-20">
        {nominations &&
          nominations.map((nom, idx) => {
            return (
              <div key={idx} className="w-full lg:max-w-full lg:flex">
                <div className="h-max lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                  <Movie
                    imdbID={nom.imdbID}
                    Poster={nom.Poster}
                    Title={''}
                    Year={' '}
                    Type={nom.Type}
                  />
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-gradient-to-t from-gray-200 to-purple-200 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {nom.Title}
                    </div>
                    <p className="text-gray-700 text-base">{nom.Plot}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-900 py-1 leading-relaxed">
                        Starring: {nom.Actors}
                      </p>
                      <p className="text-gray-900 leading-none py-1">
                        Director: {nom.Director}
                      </p>
                      <p className="text-gray-600 py-1">{nom.Year}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Nominations
