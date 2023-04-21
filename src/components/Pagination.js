import { useState, useEffect } from 'react'

function Pagination({ currentPage, totalPages, onPageChange }) {
  const [isLastPage, setIsLastPage] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    // Check if it's the last page
    if (currentPage === totalPages) {
      setIsLastPage(true)
      setShowMessage(true)
      // Hide the message after 3 seconds
      setTimeout(() => setShowMessage(false), 3000)
    } else {
      setIsLastPage(false)
    }
  }, [currentPage, totalPages])

  const handlePageChange = (newPage) => {
    onPageChange(newPage)
  }

  return (
    <>
      {/* Pagination */}
      <div className="flex justify-center my-4">
        <button
          className="px-4 py-2 border border-gray-400 rounded-md mr-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}>
          Previous Page
        </button>
        <span className="px-4 py-2 border border-gray-400 rounded-md">
          {currentPage}
        </span>
        <button
          className="px-4 py-2 border border-gray-400 rounded-md"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isLastPage}>
          Next Page
        </button>
      </div>

      {/* Last page message */}
      {showMessage && (
        <div className="flex justify-center my-4">
          <span className="text-gray-500">You've reached the last page.</span>
        </div>
      )}
    </>
  )
}

export default Pagination
