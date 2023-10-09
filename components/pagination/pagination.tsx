'use client'
import { useState } from 'react'

interface PaginationProps {
  total: number
  currentPage: number
  limit: number
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  currentPage,
  limit,
}) => {
  const [activePage, setActivePage] = useState(currentPage)
  const totalPage: number = Math.ceil(total / limit)

  const handlePageClick = (page: number) => {
    setActivePage(page)
  }

  return (
    <nav className="flex items-center justify-center mt-4">
      <ul className="flex ">
        <li>
          <button
            onClick={() => handlePageClick(activePage - 1)}
            disabled={activePage === 1}
            className={`w-[40px] h-[40px] px-3 py-2 rounded-full ${
              activePage === 1
                ? 'text-gray-100 cursor-not-allowed'
                : 'text-black'
            }`}
          >
            {'<'}
          </button>
        </li>

        {Array.from({ length: totalPage }, (_, index) => index + 1).map(
          (page) => (
            <li key={page}>
              <button
                onClick={() => handlePageClick(page)}
                className={`w-[40px] h-[40px] px-3 py-2 rounded-full ${
                  activePage === page ? 'bg-primary-200' : 'bg-transparent/[0]'
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
            disabled={activePage === totalPage}
            className={`w-[40px] h-[40px] px-3 py-2 rounded-full ${
              activePage === totalPage
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
