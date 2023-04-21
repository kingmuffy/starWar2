import React from 'react'
import CharacterList from './components/CharacterList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-screen-lg mx-auto my-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Star Wars Characters
        </h1>
        <CharacterList />
      </div>
      <Footer />
    </div>
  )
}

export default App
