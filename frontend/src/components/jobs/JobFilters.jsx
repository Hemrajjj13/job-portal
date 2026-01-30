import React from 'react'

const JobFilters = ({ onFilterChange }) => {
  return (
    <div className='flex gap-4 mb-6'>
      <input
        type='text'
        placeholder='Search job'
        className='border p-2'
        onChange={(e) => onFilterChange("search", e.target.value)}
      />

      <select
        className='border p-2'
        onChange={(e) => onFilterChange("location", e.target.value)}
      >
        <option value="">Location</option>
        <option value="Remote">Remote</option>
        <option value="Pune">Pune</option>
        <option value="Bangalore">Banglore</option>
      </select>

      <select
        className="border p-2"
        onChange={(e) => onFilterChange("type", e.target.value)}
      >
        <option value="">Job Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Internship">Internship</option>
      </select>
    </div>
  );
};

export default JobFilters;