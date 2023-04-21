import React, { useState, useEffect } from 'react'
import CharacterRow from './CharacterRow'

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
    return characters.filter((character) => {
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
  }

  return (
    <div className="container mx-auto">
      {/* Search */}
      <div className="flex items-center">
        <label htmlFor="search" className="mr-2">
          Search:
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
      <div className="flex items-center">
        <label htmlFor="hair-color-filter" className="mr-2">
          Hair Color:
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
      <div className="flex items-center">
        <label htmlFor="height-filter" className="mr-2">
          Height:
        </label>
        <input
          type="number"
          id="height-filter"
          value={heightFilter}
          onChange={handleHeightFilterChange}
          className="px-2 py-1 border-gray-300 border rounded-md focus:outline-none focus:border-indigo-500 w-24"
        />
      </div>

      {/* Character table */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterCharacters().map((character) => (
          <div className="bg-white rounded-lg shadow-lg" key={character.name}>
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${
                character.url.split('/')[5]
              }.jpg`}
              alt={`Picture of ${character.name}`}
              className="w-full rounded-t-lg"
            />
            <div className="px-4 py-2">
              <h2 className="text-lg font-bold mb-2">{character.name}</h2>
              <div className="mb-2">
                <span className="font-bold mr-2">Height:</span>
                <span>{character.height} cm</span>
              </div>
              <div className="mb-2">
                <span className="font-bold mr-2">Mass:</span>
                <span>{character.mass} kg</span>
              </div>
              <div className="mb-2">
                <span className="font-bold mr-2">Hair color:</span>
                <span>{character.hair_color}</span>
              </div>
              <div className="mb-2">
                <span className="font-bold mr-2">Skin color:</span>
                <span>{character.skin_color}</span>
              </div>
              <div className="mb-2">
                <span className="font-bold mr-2">Eye color:</span>
                <span>{character.eye_color}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-4">
        <button
          className="px-4 py-2 border border-gray-400 rounded-md mr-2"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}>
          Previous Page
        </button>
        <span className="px-4 py-2 border border-gray-400 rounded-md">
          {page}
        </span>
        <button
          className="px-4 py-2 border border-gray-400 rounded-md"
          onClick={() => handlePageChange(page + 1)}
          disabled={!characters.length}>
          Next Page
        </button>
      </div>
    </div>
  )
}

export default CharacterList
