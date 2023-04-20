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

  // ...continued from previous code
  // Inside the return statement
  return (
    <div>
      <div className="my-4 flex justify-between items-center">
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
      </div>

      {/* Character table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Skin Color</th>
            <th>Eye Color</th>
          </tr>
        </thead>
        <tbody>
          {filterCharacters().map((character) => (
            <CharacterRow key={character.name} character={character} />
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center my-4">
        <button
          className="px-4 py-2 border border-gray-400 rounded-md mr-2"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}>
          Previous Page
        </button>
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
