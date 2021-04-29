import React, { useState } from 'react'

export const Search = (): JSX.Element => {
  const [query, setQuery] = useState('')

  return (
    <div className="container mx-auto pt-6">
      <div className="flex justify-center max-w-screen-sm mx-auto overflow-hidden px-10">
        <form className="w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
          <input
            type="text"
            name="query"
            placeholder="Search movies by name..."
            className="appearance-none w-full outline-none focus:outline-none active:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Search
