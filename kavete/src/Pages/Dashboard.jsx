import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { JobContext } from "../Context/JobContext";
import { categories } from "../Data/categories";
import {auth,provider} from './firebase.js'
import { onAuthStateChanged, signInWithPopup, signOut} from '@firebase/auth'
import { House } from 'lucide-react';
import { FileText } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const { allJobs, category, level, setJobLevel, setCategory, setPage, setSaved } =
    useContext(JobContext);

  const [displayJob, setDisplayJob] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [authUser, setAuthUser] = useState(null)

  const navigate = useNavigate();
  

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
  const notify = () => toast("This Job has been saved to your profile");

  const signInGoogle = async () => {
    signInWithPopup(auth, provider).then((result) => {setEmail(result.user.email)}).catch((error) => {console.log(error.message)})
    localStorage.setItem('email', result.useremail)

}

  const usersignOut = () => {
    signOut(auth)
}

  

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })

    }, [])

  return (
    <>
    <ToastContainer />
      <div className="w-full  px-3 max-w-[850px] mx-auto">
        <div className="mt-10 w-full  items-center justify-start gap-2 flex rounded-lg bottom-0">
        {authUser ? <>
       
        <img src={authUser.photoURL} className="rounded-full w-12 h-12 shadow-lg border border-white "/>
        <div className="flex flex-col">
        <p>{` ${authUser.displayName}`}</p>{console.log(authUser)}
        <p className="cursor-pointer" onClick={usersignOut}>logout</p>
        </div>
        </>:
       <button onClick={signInGoogle} className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
       <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
       <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
       </svg>
       Sign in with Google
       </button>
        }
          <Link className="px-4 py-2 rounded-md text-white cursor-pointer bg-indigo-400" to={"/"}> <span><House /></span></Link>
          <Link className="px-4 py-2 rounded-md text-white cursor-pointer bg-indigo-400" to={"/edit"}> <span><FileText /></span></Link>
        
      
        </div>
       
     

        <div className="mt-5 grid items-center grid-cols-1 gap-3  w-full">
          <div className="flex items-center sticky bg-white rounded-lg shadow-lg p-6 h-full">
            <form className="grid grid-cols-1 sm:grid-cols-3  gap-3">
              <div>
                <label htmlFor="category">Select Job Category</label>
                
                <select
                  onChange={categoryHandler}
                  value={category}
                  className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option defaultValue={"Design%20and%20UX"}>
                    Select Job Category
                  </option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category
                        .replace(/%20/g, " ")
                        .replace(/%2F/g, "/")
                        .replace(/%2C/g, "")}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="level">Level</label>
                <select
                  onChange={levelHandler}
                  value={level}
                  className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">All Job Levels</option>
                  <option value="Mid%20Level">Mid Level</option>
                  <option value="Senior%20Level">Senior Level</option>
                  <option value="management">Management</option>
                </select>
              </div>

              <div>
              <label htmlFor="level">Level</label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                <option value="">Country</option>
              </select>

              </div>
            </form>
          </div>

          {allJobs?.results &&
            allJobs.results.map((job, index) => (
              <div
                className="flex  flex-col  bg-white h-full rounded-lg shadow-lg p-6  hover:bg-slate-100"
                key={index} 
              >
                <div className="z-20 flex items-center justify-center border mb-4 bg-indigo-500 text-white shadow-lg h-5 w-5 p-4 rounded-full flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <p className="font-bold text-2xl"> {job.name}</p>
                </div>

                <div className="">
                  <p className="mt-2"><span>Company Location: </span>
                    {job.locations.length > 0
                      ? job.locations[0].name
                      : "No location available"}
                  </p>
                  <p className="mt-2"><span>Company Name: </span>{job.company.name}</p>
                  <p className="mt-2 mb-2"><span>Publication Date: </span>
                    {new Date(job.publication_date).toLocaleDateString()}
                  </p>
                  <p
                    className={activeIndex===index?"":"hidden"}
                    style={{
                      flexDirection: "column",
                      fontSize: "14px",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: job.contents,
                    }}
                  />
                  <div className="flex gap-2 mt-2">
                    <button className="p-2 right-0 text-xs font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setActiveIndex(index)}>See more </button>
                    <div className={activeIndex===index? "": "hidden"}>
                    <button onClick={() => {
                  setSaved(job.contents); notify();  setTimeout(() => {
                    navigate('/edit');
                  }, 2000);
                }} className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2">Generate Resume & Cover Letter</button>
                    
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className="flex justify-center items-center gap-4 cursor-pointer">
            {[1, 2, 3, 4, 5].map((pageNumber) => (
              <p
                key={pageNumber}
                className="paginate"
                onClick={() => handlePageClick(pageNumber)}
              >
                <span className="z-20 flex items-center justify-center border mb-4 bg-indigo-500 text-white shadow-lg h-5 w-5 p-4 rounded-full flex-shrink-0">{pageNumber}</span>
              </p>
            ))}
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Dashboard;
