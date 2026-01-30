import React from 'react'

const JobCard = ({ job }) => {
  return (
    <div className="border p-4 rounded-md hover:shadow">
      <h2 className="font-semibold text-lg">{job.title}</h2>
      <p className='text-sm text-gray-600'>{job.company}</p>
      <p className='text-sm'>{job.location}</p>
      <p className='text-sm mt-2'>{job.type}</p>
    </div>
  )
}

export default JobCard