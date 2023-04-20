import React from 'react'

function CharacterRow({ character }) {
  const { name, height, mass, hair_color, url } = character
  const imageURL = `https://starwars-visualguide.com/assets/img/characters/${
    url.split('/')[5]
  }.jpg`

  return (
    <>
      <tr className="hover:bg-gray-100 hidden sm:table-row">
        <td className="px-6 py-4 whitespace-nowrap">{name}</td>
        <td className="px-6 py-4 whitespace-nowrap">{height}</td>
        <td className="px-6 py-4 whitespace-nowrap">{mass}</td>
        <td className="px-6 py-4 whitespace-nowrap">{hair_color}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <img src={imageURL} alt={name} className="h-10 w-10 rounded-full" />
        </td>
      </tr>
      <tr className="hover:bg-gray-100 table-row sm:hidden">
        <td className="px-6 py-4 whitespace-nowrap">{name}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <img src={imageURL} alt={name} className="h-10 w-10 rounded-full" />
        </td>
      </tr>
    </>
  )
}

export default CharacterRow
