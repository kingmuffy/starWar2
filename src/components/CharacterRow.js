import React from 'react'

function CharacterRow({ character }) {
  const { name, height, mass, hair_color, url } = character
  const imageURL = `https://starwars-visualguide.com/assets/img/characters/${
    url.split('/')[5]
  }.jpg`

  return (
    <div>
      <div className="hover:bg-gray-100 table-row sm:hidden mx-auto">
        <div className="px-6 py-4 whitespace-nowrap">{name}</div>
        <div className="px-6 py-4 whitespace-nowrap">{height}</div>
        <div className="px-6 py-4 whitespace-nowrap">{mass}</div>
        <img src={imageURL} alt={name} className="h-20 w-20 rounded-full" />
      </div>
    </div>
  )
}

export default CharacterRow
