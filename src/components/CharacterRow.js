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
      <div className="relative">
        <img
          src={imageURL}
          alt={`Picture of ${character.name}`}
          className="w-full rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 z-10 flex flex-col justify-end px-4 py-2">
          <h2 className="text-lg font-bold mb-2 text-white">
            {character.name}
          </h2>
          <div className="mb-2">
            <span className="font-bold mr-2 text-white">Height:</span>
            <span className="text-white">{character.height} cm</span>
          </div>
          <div className="mb-2">
            <span className="font-bold mr-2 text-white">Mass:</span>
            <span className="text-white">{character.mass} kg</span>
          </div>
          <div className="mb-2">
            <span className="font-bold mr-2 text-white">Hair color:</span>
            <span className="text-white">{character.hair_color}</span>
          </div>
          <div className="mb-2">
            <span className="font-bold mr-2 text-white">Skin color:</span>
            <span className="text-white">{character.skin_color}</span>
          </div>
          <div className="mb-2">
            <span className="font-bold mr-2 text-white">Eye color:</span>
            <span className="text-white">{character.eye_color}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CharacterRow
