import React, { useState, useEffect } from 'react'
import CharacterRow from './CharacterRow'
import { motion } from 'framer-motion'

function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [hairColorFilter, setHairColorFilter] = useState('')
  const [heightFilter, setHeightFilter] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://swapi.py4e.com/api/people/?page=${page}`
        )
        const data = await response.json()
        setCharacters(data.results)
      } catch (error) {
        console.error(error)
        setCharacters([])
      }
    }
    fetchData()
  }, [page])

  function handlePageChange(newPage) {
    setPage(newPage)
    window.scrollTo(0, 0)
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value)
  }

  function handleHairColorFilterChange(event) {
    setHairColorFilter(event.target.value)
  }

  function handleHeightFilterChange(event) {
    setHeightFilter(event.target.value)
  }

  function filterCharacters() {
    const filteredCharacters = characters.filter((character) => {
      if (
        searchTerm &&
        !character.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false
      }
      if (hairColorFilter && character.hair_color !== hairColorFilter) {
        return false
      }
      if (
        heightFilter &&
        parseInt(character.height, 10) < parseInt(heightFilter, 10)
      ) {
        return false
      }
      return true
    })

    return filteredCharacters.slice(0, 9)
  }

  const isLastPage = page === 9
  return (
    <div className="container mx-auto">
      <div className="flex items-center lg:justify-between">
        {/* Search */}
        <div className="flex items-center  flex-wrap lg:flex-no-wrap">
          <label htmlFor="search" className="mr-2">
            <span className="font-bold text-gray-600">Search:</span>
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-2 py-1 border-gray-300 border rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Hair color filter */}
        <div className="flex items-center hidden lg:flex lg:justify-center">
          <label htmlFor="hair-color-filter" className="mr-2">
            <span className="font-bold text-gray-600"> Hair Color:</span>
          </label>
          <select
            id="hair-color-filter"
            value={hairColorFilter}
            onChange={handleHairColorFilterChange}
            className="px-2 py-1 border-gray-300 border rounded-md focus:outline-none focus:border-indigo-500">
            <option value="">All</option>
            <option value="blond">Blond</option>
            <option value="brown">Brown</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="white">White</option>
            <option value="grey">Grey</option>
          </select>
        </div>

        {/* Height filter */}
        <div className="flex items-center hidden lg:flex">
          <label htmlFor="height-filter" className="mr-2">
            <span className="font-bold text-gray-600">Height:</span>
          </label>
          <input
            type="number"
            id="height-filter"
            value={heightFilter}
            onChange={handleHeightFilterChange}
            className="px-2 py-1 border-gray-300 border rounded-md focus:outline-none focus:border-indigo-500 w-24"
          />
        </div>
      </div>

      {/* Character table */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterCharacters().map((character) => (
          <div key={character.name} className="max-h-96 overflow-hidden">
            <CharacterRow character={character} />
          </div>
        ))}
      </motion.div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 border rounded-l-md border-indigo-500 bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}>
          Previous
        </button>
        <span className="px-4 py-2 border border-indigo-500 bg-white text-gray-700 font-medium">
          {page}
        </span>
        {isLastPage ? (
          <button
            className="px-4 py-2 border border-indigo-500 bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 disabled:opacity-50"
            disabled>
            Next
          </button>
        ) : (
          <button
            className="px-4 py-2 border border-indigo-500 bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            onClick={() => handlePageChange(page + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  )
}

export default CharacterList
