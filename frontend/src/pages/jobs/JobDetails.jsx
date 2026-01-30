import { useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [applied, setApplied] = useState(false);
  const [resume, setResume] = useState(null);

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <div className='p-6 max-w-3xl mx-auto'>
      <h1 className='text-2xl font-bold mb-2'>
        Frontend Developer
      </h1>
      <p className='text-gray-600 mb-4'>TechCorp • Remote</p>

      <p className='mb-6'>
        We are looking for a frontend developer with React experience.
      </p>


      {!applied ? (
        <div className='space-y-4'>
          <input
            type='file'
            onChange={(e) => setResume(e.target.files[0])}
          />
          <button
            onAbort={handleApply}
            className='px-4 py-2 bg-black text-white'
          >
            Apply Now
          </button>
        </div>
      ) : (
        <p className='text-green-600 font-semibold'>
          ✅ Application submitted
        </p>
      )}
    </div>
  );
};

export default JobDetails;