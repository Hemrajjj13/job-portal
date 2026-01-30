import React from 'react';

const stats = {
  totalJobs: 4,
  totalApplicants: 32,
};

const RecruiterDashboard = () => {
  return (
    <div className='p-6'>
      <h1 className='text-xl font-bold mb-6'>Recruiter Dashboard</h1>

      <div className='grid grid-cols-2 gap-4'>
        <div className='border p-4 rounded'>
          <p className='text-sm'>Total Jobs</p>
          <p className='text-2xl font-bold'>{stats.totalJobs}</p>
        </div>

        <div className='border p-4 rounded'>
          <p className='text-sm'>Total Applicants</p>
          <p className='text-2xl font-bold'>{stats.totalApplicants}</p>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;