import React from 'react'

const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className='flex gap-2 mt-6'>
        {Array.from({ length: totalPages }, (_, i) => (
            <button
                key={i}
                className={`px-3 py-1 border ${
                    page === i + 1 ? "bg-black text-white" : ""}`}
                onClick={() => onPageChange(i + 1)}
            >
                {i+1}
            </button>
        ))}
    </div>
  )
}

export default Pagination;
