import React from 'react'
import CharacterList from './components/CharacterList'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-screen-lg mx-auto my-8 px-4 sm:px-6 lg:px-8">
        <Navbar />

        <CharacterList />
      </div>
      <Footer />
    </div>
  )
}

export default App
