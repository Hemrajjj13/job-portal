import React from 'react'


const applications = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    company: "TechCorp",
    status: "Pending",
  },
  {
    id: 2,
    jobTitle: "Backend Intern",
    company: "StartupX",
    status: "Shortlisted",
  },
];

const CandidateDashboard = () => {
  return (
    <div className='p-6'>
      <h1 className='text-xl font-bold mb-4'>My Applications</h1>

      <div className='space-y-4'>
        {applications.map((app) => (
          <div key={app.id} className='border p-4 rounded'>
            <h2 className='font-semibold'>{app.jobTitle}</h2>
            <p className='text-sm text-gray-600'>{app.company}</p>
            <p className='mt-2'>
              Status: {" "}
              <span className='font-semibold'>{app.status}</span>
            </p>
          </div> 
        ))}
      </div>
    </div>
  );
};

export default CandidateDashboard;