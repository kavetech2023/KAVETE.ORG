import React, { useContext, useEffect, useState } from 'react'
import TagLine from '../Components/TagLine'
import Sidebar from '../Components/Sidebar'
import { Link } from "react-router-dom";
import { JobContext } from '../Context/JobContext';
import { categories } from '../Data/categories';


const Dashboard = () => {
  const { allJobs, category, level,setJobLevel, setCategory, setPage } = useContext(JobContext);

  const [displayJob, setDisplayJob] = useState([]);

  


  const categoryHandler = (e) => {
    setCategory(e.target.value); 
    setPage(1); 
  };
  const levelHandler = (e) => {
    setJobLevel(e.target.value); 
  };
 


  useEffect(() => {
    setDisplayJob(allJobs);
  }, [allJobs]);




 
  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };
  return (
    
    <div className='w-full  px-3'>
      <Sidebar />
            <div className="flex items-start md:ml-16 lg:ml-64 p-2  flex-col">
       
        {/* Dashboard Navbar */}
        <nav className='flex items-center space-x-4 bg-white border border-indigo/400/30 rounded-lg shadow-lg p-6 w-full h-full max-w-screen-xl
        '>

        </nav>
        {/* Dashboard Navbar */}

        
        <div className="mt-10 grid items-center grid-cols-1 gap-3  w-full">
           <div className="flex  flex-col  bg-white rounded-lg shadow-lg p-6 h-full">
           <form>
        <select onChange={categoryHandler} value={category} className='border border-gray-300 rounded-lg max-w-full mr-3'>
            <option defaultValue={"Design%20and%20UX"} >Select Job Category</option>
            {categories.map((category, index) => (
              <option key={index}  value={category}>{category.replace(/%20/g, " ").replace(/%2F/g, "/").replace(/%2C/g, "")}</option>
            ))}

          </select>

  <select onChange={levelHandler} value={level} className='border border-gray-300 rounded-lg shadow-2xl'>
   <option value="">All Job Levels</option>
    <option value="Mid%20Level">Mid Level</option>
    <option value="Senior%20Level">Senior Level</option>
    <option value="management">Management</option>    
  </select>

          
        </form>
           </div>


{allJobs?.results && allJobs.results.map((job, index) => (
          <Link to={`/job/${index + 1}`} className="flex  flex-col  bg-white rounded-lg shadow-lg p-6 h-full hover:bg-slate-100" key={index}>
           
            <div>
              
              <p> {job.name}</p>
            </div>

            <div className='pl-0'>
            <p className="text-sm text-gray-400">{job.locations.length > 0 ? job.locations[0].name : 'No location available'}</p>
            <p className="text-sm text-gray-400">{job.company.name}</p>
            <p className="text-sm text-gray-400">{new Date(job.publication_date).toLocaleDateString()}</p>
            </div>
            
          </Link>
        ))}
        <div className="pagination-table">
          {[1, 2, 3, 4, 5,].map((pageNumber) => (
            <p
              key={pageNumber}
              className="paginate"
              onClick={() => handlePageClick(pageNumber)}
            >
              <span>{pageNumber}</span>
            </p>
          ))}
          </div>

        


            </div>
            <div className='flex items-center space-x-4 mt-4 bg-white border border-indigo/400/30 rounded-lg shadow-lg p-6 w-full h-full max-w-screen-xl
        '>
            iam the bottom.
        </div>
    </div>
    </div>
  )
}

export default Dashboard