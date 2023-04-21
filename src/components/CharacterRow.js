import React from 'react'
import { motion } from 'framer-motion'

function CharacterRow({ character }) {
  const imageURL = `https://starwars-visualguide.com/assets/img/characters/${
    character.url.split('/')[5]
  }.jpg`

  return (
    <motion.div
      layout
      className="bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      key={character.name}>
      <img
        src={imageURL}
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
    </motion.div>
  )
}

export default CharacterRow
