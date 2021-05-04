import Router from 'next/router'
import { useEffect, useState } from 'react'

export const SearchBar = (): JSX.Element => {
  const [terms, setTerms] = useState('')
  const [error, setError] = useState('')

  const routeToResults = (terms: string) => {
    if (!terms || terms.length === 0) {
      setError('Enter a name of your favourite movie (e.g. "tenet").')
    } else if (terms.length < 3) {
      setError('Your search should be at least three characters long.')
    } else {
      setError('')
      const finalTerms = terms.replace(' ', '-')
      Router.push('/search/[title]', `/search/${finalTerms}`)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => routeToResults(terms), 400)
    return () => clearTimeout(timer)
  }, [terms])

  const handleEntry = (e) => {
    setTerms(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    routeToResults(terms)
  }

  return (
    <div className="container mx-auto pt-6">
      <div className="flex justify-center max-w-screen-sm mx-auto overflow-hidden px-10">
        <form
          className="w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="query"
            aria-label="search-input"
            placeholder="Search movies by name..."
            autoComplete="off"
            className="text-gray-800 appearance-none w-full outline-none focus:outline-none active:outline-none"
            value={terms}
            onChange={handleEntry}
          />
          <button
            type="submit"
            aria-label="search-submit"
            className="ml-1 outline-none focus:outline-none active:outline-none"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current text-gray-300"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </form>
      </div>
      {error && <p className="text-center py-3">Hint: {error}</p>}
    </div>
  )
}

export default SearchBar
