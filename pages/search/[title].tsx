import { GetServerSideProps } from 'next'
import React from 'react'
import Movies from '../../components/movies/Movies'
import SearchBar from '../../components/SearchBar'
import { IMovieShort } from '../../utils/types'
interface PropsResults {
  movies: IMovieShort[]
  title: string
}

const Results = ({ movies, title }: PropsResults): JSX.Element => {
  title = title.replace('-', ' ')

  if (!movies || movies.length === 0) {
    return (
      <div>
        <SearchBar />
        <p className="text-2xl p-3">
          Sorry! No results found for {`'${title}'`}
        </p>
      </div>
    )
  }

  return (
    <div>
      <SearchBar />
      <div className={'p-3'}>Results for: {`'${title}'`}</div>
      <div className="m-3">
        {movies ? <Movies movies={movies} /> : 'No results were found.'}
      </div>
    </div>
  )
}

/**
 * Gets movie query, only runs on server
 * @param context
 * @returns props for Home
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const title = context.query.title || ''
  const request = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${title}&type=movie`
  )
  const searchResults = await request.json()
  const movies: IMovieShort[] = searchResults.Search
  return {
    props: {
      movies: movies ?? null,
      title: title,
    },
  }
}

export default Results
