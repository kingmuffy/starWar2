import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-transparent flex flex-wrap items-center justify-between px-4 py-2">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link to="/">
          <span className="font-bold text-white text-xl">My App</span>
        </Link>
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200"
          onClick={toggleNavbar}>
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
            About
          </Link>
          <Link
            to="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
