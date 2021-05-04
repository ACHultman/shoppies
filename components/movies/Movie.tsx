import Image from 'next/image'

import { IMovieShort } from '../../utils/types'
import { formatYear } from '../../utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { addNomination, removeNomination } from '../../store/nominations/action'
import { RootState } from '../../store/store'
import { ThumbDownIcon, ThumbUpIcon } from '@heroicons/react/outline'

const Movie = ({ imdbID, Poster, Title, Year }: IMovieShort): JSX.Element => {
  const globalState = useSelector(
    (state: RootState) => state.nominations.nominations
  )
  const dispatch = useDispatch()
  const onClick = () => {
    if (globalState.indexOf(imdbID) === -1) {
      dispatch(addNomination(globalState, imdbID))
    } else {
      dispatch(removeNomination(globalState, imdbID))
    }
  }
  if (!Poster || Poster === 'N/A') {
    Poster = '/noPoster.png'
  }

  const movieNominated = globalState.indexOf(imdbID) > -1

  return (
    <div className="group">
      <div
        onClick={() => onClick()}
        className="p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-40 cursor-pointer"
      >
        <div className="relative">
          <Image
            src={Poster}
            layout={'responsive'}
            height={1920 * 1.48}
            width={1920}
            className="group-hover:opacity-50"
          />
          <div className="transition duration-500 ease-in-out z-40 absolute top-1/3 left-0.5 opacity-0 group-hover:opacity-100 h-24 w-24 text-center">
            {movieNominated ? (
              <>
                <ThumbDownIcon />
                <p className="text-center text-xl">
                  Click to remove nomination
                </p>
              </>
            ) : (
              <>
                <ThumbUpIcon />
                <p className="text-center text-xl">Click to nominate</p>{' '}
              </>
            )}
          </div>
        </div>
        <div className="p-2 flex justify-between">
          <h2
            className={
              'text-2xl transition-all duration-100 ease-in-out group-hover:font-bold w-4/5'
            }
          >
            {Title}
          </h2>
          {movieNominated && <ThumbUpIcon className="h-8 w-8" />}
          <p className="opacity-0 group-hover:opacity-100">
            {formatYear(Year)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Movie
