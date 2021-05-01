import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Movie from '../components/movies/Movie'

export const Home = (): JSX.Element => {
  const router = useRouter()

  const handleSearchClick = () => {
    router.push('/search')
  }

  return (
    <div>
      <Head>
        <title>Shoppies</title>
      </Head>
      {/* The following was adapted from  https://github.com/ammezie/tailwind_landing_page */}
      <div className="py-20 bg-gradient-to-r from-[667eea]-0 to-[764ba2]-900 text-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Welcome To The Shoppies!
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            Movie awards for entrepreneurs.
          </h3>
          <button
            onClick={() => handleSearchClick()}
            className="bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
          >
            Search For Movies
          </button>
        </div>
      </div>
      <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-20">
          Nomination
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl  font-bold mb-3">Search</h4>
            <p className=" mb-8 text-gray-200">
              Our Smart Health Monitoring Wristwatch is able to capture you
              vitals while you exercise. You can create different category of
              exercises and can track your vitals on the go.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/landing_search.svg" alt="Search" />
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img src="/landing_choose.svg" alt="Choose" />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl font-bold mb-3">Choose</h4>
            <p className="mb-8 text-gray-200">
              Pick out your favorite movies! Nominate up to five movies for the
              coveted Shoppies Movie Award.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl font-bold mb-3">Share</h4>
            <p className="text-gray-200 mb-8">
              Send your list of nominations to your friends.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/landing_share.svg" alt="Share" />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 text-gray-800">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center  mb-10">
            Top Nominated
          </h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-2 mb-4">
              <p className="text-center mb-4 text-2xl font-bold">154,233</p>
              <Movie
                Title={'Blade Runner 2049'}
                Poster={
                  'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg'
                }
                Year={'2017'}
                imdbID={'tt1856101'}
                Type={'movie'}
              />
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <p className="text-center mb-4 text-2xl font-bold">151,591</p>
              <Movie
                Title={'The Shawshank Redemption'}
                Poster={
                  'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
                }
                Year={'1994'}
                imdbID={'tt0111161'}
                Type={'movie'}
              />
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <p className="text-center mb-4 text-2xl font-bold">140,557</p>
              <Movie
                Title={'Tenet'}
                Poster={
                  'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg'
                }
                Year={'2020'}
                imdbID={'tt6723592'}
                Type={'movie'}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-6 text-center py-20 bg-[667eea]">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            Nominate Now!
          </h2>
          <h3 className="my-4 text-2xl text-white">
            Support your favorite movies, start nominating!
          </h3>
          <button
            onClick={() => handleSearchClick()}
            className="bg-white text-gray-800 font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
          >
            Search For Movies
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
