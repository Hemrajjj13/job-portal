import { useState} from 'react';
import JobCard from './JobCard';
import JobFilters from './JobFilters';
import Pagination from './Pagination';


const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Backend Intern",
    company: "StartupX",
    location: "Pune",
    type: "Internship",
  },
];

const Jobs = () => {
    const [filters, setFilters] = useState({});
    const [page, setPage] = useState(1);

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({...prev, [key]: value }));
    };

  return (
    <div className='p-6'>
        <JobFilters onFilterChange={handleFilterChange} />

        <div className='grid gap-4'>
            {mockJobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>

        <Pagination page={page} totalPages={3} onPageChange={setPage} />
    </div>
  );
};

export default Jobs;