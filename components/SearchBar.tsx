import Router from 'next/router'
import { useState } from 'react'

export const SearchBar = (): JSX.Element => {
  const [terms, setTerms] = useState('')

  const handleEntry = (e) => {
    setTerms(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (terms != '') {
      const finalTerms = terms.replace(' ', '-')
      Router.push('/search/[title]', `/search/${finalTerms}`)
    } else {
      alert('Please enter search terms.')
    }
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
            placeholder="Search movies by name..."
            autoComplete="off"
            className="text-gray-800 appearance-none w-full outline-none focus:outline-none active:outline-none"
            value={terms}
            onChange={handleEntry}
          />
          <button
            type="submit"
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
    </div>
  )
}

export default SearchBar
