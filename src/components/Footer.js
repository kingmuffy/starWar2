import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p>&copy; 2023 Star Wars Inc. All rights reserved.</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +421 xxxxxxxxxx</p>
            <p>841 10 Bratislava, Slovakia</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {/* <Link to="/" className="text-gray-400 hover:text-gray-200">
            <i className="fab fa-facebook fa-lg"></i>
            </Link>
            <Link to="/" className="text-gray-400 hover:text-gray-200">
            <i className="fab fa-twitter fa-lg"></i>
            </Link>
            <Link to="/" className="text-gray-400 hover:text-gray-200">
            <i className="fab fa-instagram fa-lg"></i>
            </Link>
            <Link to="/" className="text-gray-400 hover:text-gray-200">
            <i className="fab fa-linkedin fa-lg"></i>
            </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
