import { CheckIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { IMovieLong } from '../utils/types'
import Movie from './movies/Movie'

const Nominations = ({
  nominations,
}: {
  nominations: IMovieLong[]
}): JSX.Element => {
  const [clicked, setClicked] = useState(false)
  let pathToShare = window.location.href // current path (e.g. http://<domain>/nominations)
  nominations.map((nom) => (pathToShare = pathToShare + `/${nom.imdbID}`)) // append all IDs to path
  return (
    <div>
      <div className="container mx-auto mb-10 text-center">
        <h1 className="text-4xl ">Nominations</h1>
        <button
          className="transition duration-500 ease-in-out hover:bg-purple-300 transform hover:-translate-y-1 hover:scale-110 bg-white text-gray-800 font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider focus:outline-none"
          onClick={() => {
            navigator.clipboard.writeText(pathToShare)
            setClicked(true)
          }}
        >
          {clicked ? (
            <div className="flex text-center">
              <h3 className="text-left">Copied</h3>
              <CheckIcon className="h-8 ml-3 pb-2" />{' '}
            </div>
          ) : (
            'Get Share Link'
          )}
        </button>
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
