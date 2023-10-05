'use client'
import { useState } from 'react'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const [activePage, setActivePage] = useState(currentPage)

  const handlePageClick = (page: number) => {
    setActivePage(page)
  }
  // 추후 아이콘으로 교체 예정

  return (
    <nav className="flex items-center justify-center mt-4">
      <ul className="flex ">
        <li>
          <button
            onClick={() => handlePageClick(activePage - 1)}
            disabled={activePage === 1}
            className={`px-3 py-2 rounded-full ${
              activePage === 1
                ? 'text-gray-100 cursor-not-allowed'
                : 'text-black'
            }`}
          >
            {'<'}
          </button>
        </li>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <li key={page}>
              <button
                onClick={() => handlePageClick(page)}
                className={`px-3 py-2rounded-full ${
                  activePage === page ? 'bg-pr imary-200' : 'bg-transparent/[0]'
                }`}
              >
                {page}
              </button>
            </li>
          ),
        )}

        <li>
          <button
            onClick={() => handlePageClick(activePage + 1)}
            disabled={activePage === totalPages}
            className={`px-3 py-2 rounded-full ${
              activePage === totalPages
                ? 'text-gray-100 cursor-not-allowed'
                : 'text-black'
            }`}
          >
            {'>'}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
