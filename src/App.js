import React from 'react'
import CharacterList from './components/CharacterList'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen w-full flex flex-col">
      <Header />

      <div className="max-w-screen-lg mx-auto my-8 px-4 sm:px-6 lg:px-8 flex-1">
        <CharacterList className="w-full" />
      </div>
      <Footer />
    </div>
  )
}

export default App
