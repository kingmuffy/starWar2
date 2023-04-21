import React from 'react'
import CharacterList from './components/CharacterList'

function App() {
  return (
    <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Star Wars Characters
      </h1>
      <CharacterList />
    </div>
  )
}

export default App
