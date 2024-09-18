import React, { useContext, useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Link, useParams } from "react-router-dom";
import { JobContext } from "../Context/JobContext";
import Sidebar from "../Components/Sidebar";


const Job = ({ setNotification }) => {
  const { jobId } = useParams();
  const [jobData, setJobData] = useState({});
  const [savedJobs, setSavedJobs] = useState("Add to Cv");
  const [open, setOpen] = useState(true);

  const saveJob = () => {
    setNotification(+1);
    setSavedJobs("Added to Cv");
    
  };

  const popup = () => {
    open? setOpen(false): setOpen(true);
  }

  const componentRef = useRef();
  const handlePrintRTP = useReactToPrint({
    content: () => componentRef.current,
  });

  const { jobs, saved, setSaved } = useContext(JobContext);

  useEffect(() => {
    setJobData(jobs);
  }, [jobs]);

  return (
    <div className='w-full  px-3'>
      <Sidebar />
            <div className="flex items-start md:ml-16 lg:ml-64 p-2  flex-col">
       
        {/* Dashboard Navbar */}
        <nav className='flex items-center space-x-4 bg-white border border-indigo/400/30 rounded-lg shadow-lg p-6 w-full h-full max-w-screen-xl
        '>

        </nav>
        {/* Dashboard Navbar */}

        
        <div className="mt-10 grid items-center grid-cols-1 gap-3 bg-white rounded-lg p-4 w-full">
        {jobData && Object.keys(jobData).length > 0 ? (
          <>
            <div className="job-info" ref={componentRef}>
              <ul>
                <li>
                  <b>Job title</b>
                </li>
                <li>{jobData[jobId - 1].name}</li>
              </ul>
              <ul>
                <li>
                  <b>Company</b>
                </li>
                <li>{jobData[jobId - 1].company.name}</li>
              </ul>
              <ul>
                <li>
                  <b>Location</b>
                </li>
                <li>{jobData[jobId - 1].locations[0].name}</li>
              </ul>
              <ul>
                <li>
                  <b>Job- Level:</b>
                </li>
                <li>{jobData[jobId - 1].levels[0].name}</li>
              </ul>
              <ul>
                <li>
                  <b>Date Published:</b>
                </li>
                <li>
                  {new Date(
                    jobData[jobId].publication_date
                  ).toLocaleDateString()}
                </li>
              </ul>
              <ul>
               
                <li>
                  <Link style={{color:"blue"}} to={`${jobData[jobId - 1].refs.landing_page}`}>Click Here for the Job</Link>
                </li>
              </ul>
            </div>

            <div className="job-contents">
              <div
                style={{ flexDirection: "column", display: "flex" }}
                dangerouslySetInnerHTML={{
                  __html: jobData[jobId - 1].contents,
                }}
              />
            </div>
            <div className="save-job">
              <button
                onClick={() => {
                  setSaved(jobData[jobId - 1].contents);
                  saveJob(); popup();
                }}
              >
                <span>
                  
                </span>
                <span>{savedJobs}</span>
              </button>
              <button onClick={handlePrintRTP}>
            <span>
              
            </span>{" "}
            Download Job
          </button>
            </div>

            <div id="popup1" className={`overlay ${open?"": "overlay-open"}`}>
	<div className="popup">
		<h2>Job Added Successfully</h2>
		<a className="close" onClick={()=>open?setOpen(false): setOpen(true)} href="#">&times;</a>
		<div className="content">
			This job has been added to your Cv and Cover Letter. You can now update your Cv and Cover Letter.
		</div>
	</div>
</div>


          </>
        ) : (
          <p>No job data available</p>
        )}
      </div>
    </div>
  
        
        </div>
    );
}
  

export default Job;