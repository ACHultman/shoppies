import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'

import { IMovieShort } from '../../utils/types'
//import { handleNominationChangeRequest } from '../../utils/nominationController'
import { formatYear } from '../../utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { addNomination, removeNomination } from '../../store/nominations/action'

const Movie = ({ imdbID, Poster, Title, Year }: IMovieShort): JSX.Element => {
  const globalState = useSelector((state) => state.nominations.nominations)
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

  return (
    <div className="group">
      <div
        onClick={() => onClick()}
        className="p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 cursor-pointer"
      >
        <div className="">
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
              'text-2xl transition-all duration-100 ease-in-out group-hover:font-bold'
            }
          >
            {Title}
          </h2>
          <p className="h-10 w-10" onClick={onClick}>
            <HeartIcon />
          </p>
        </div>
      </div>
      <div className="flex items-center opacity-0 group-hover:opacity-100">
        <p>{formatYear(Year)}</p>
      </div>
    </div>
  )
}

export default Movie
