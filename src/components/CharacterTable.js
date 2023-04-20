import CharacterRow from './CharacterRow'
import React, { useState, useEffect } from 'react'

function CharacterTable() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://swapi.py4e.com/api/people/?page=${page}`
        )
        const data = await response.json()
        setCharacters(data.results)
        setError(null)
      } catch (error) {
        console.error(error)
        setCharacters([])
        setError('An error occurred while fetching data.')
      }
    }
    fetchData()
  }, [page])

  function handlePageChange(newPage) {
    setPage(newPage)
  }

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
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
              {characters.map((character) => (
                <CharacterRow key={character.name} character={character} />
              ))}
            </tbody>
          </table>

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
        </>
      )}
    </div>
  )
}

export default CharacterTable
