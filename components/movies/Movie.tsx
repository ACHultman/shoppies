import Image from 'next/image'

import { IMovieShort } from '../../utils/types'
import { formatYear } from '../../utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { addNomination, removeNomination } from '../../store/nominations/action'
import { RootState } from '../../store/store'
import { ThumbDownIcon, ThumbUpIcon } from '@heroicons/react/outline'

const Movie = ({ imdbID, Poster, Title, Year }: IMovieShort): JSX.Element => {
  const selectedNominations = useSelector(
    (state: RootState) => state.nominations.nominations
  )
  const dispatch = useDispatch()
  const onClick = () => {
    if (selectedNominations.indexOf(imdbID) === -1) {
      dispatch(addNomination(selectedNominations, imdbID))
    } else {
      dispatch(removeNomination(selectedNominations, imdbID))
    }
  }
  if (!Poster || Poster === 'N/A') {
    Poster = '/noPoster.png'
  }

  const movieNominated = selectedNominations.indexOf(imdbID) > -1

  return (
    <div className="group">
      <div className="p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-40">
        <div className="relative">
          <Image
            src={Poster}
            layout={'responsive'}
            height={1920 * 1.48}
            width={1920}
          />
        </div>
        <div className="p-2 flex justify-between">
          <h2
            className={
              'text-2xl transition-all duration-100 ease-in-out group-hover:font-bold w-4/5'
            }
          >
            {Title}
          </h2>
          <div
            className="transition duration-500 ease-in-out sm:opacity-0 group-hover:opacity-100 h-8 w-8 cursor-pointer"
            onClick={onClick}
          >
            {movieNominated ? <ThumbDownIcon /> : <ThumbUpIcon />}
          </div>
          <p className="sm:opacity-0 group-hover:opacity-100">
            {formatYear(Year)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Movie
