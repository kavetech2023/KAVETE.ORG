import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { JobContext } from "../Context/JobContext";
import { categories } from "../Data/categories";
import { auth, provider } from './firebase.js';
import { onAuthStateChanged, signInWithPopup, signOut } from '@firebase/auth';
import { House, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const { allJobs, category, level, setJobLevel, setCategory, setPage, setSaved, setLink } = useContext(JobContext);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  const categoryHandler = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const levelHandler = (e) => {
    setJobLevel(e.target.value);
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const notify = () => toast.success("This Job has been saved to your profile");

  const signInGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem('email', result.user.email);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const userSignOut = () => {
    signOut(auth).catch((error) => console.error("Error signing out:", error));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
    });

    return () => unsubscribe();
  }, []);

  const toggleJobDetails = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const handleGenerateResume = (job) => {
    setSaved(job.contents);
    setLink(job.refs.landing_page);
    notify();
    setTimeout(() => {
      navigate('/edit');
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {authUser ? (
                <>
                  <img src={authUser.photoURL} alt="User" className="w-12 h-12 rounded-full shadow-lg border-2 border-indigo-500" />
                  <div>
                    <p className="font-semibold text-lg">{authUser.displayName}</p>
                    <button onClick={userSignOut} className="text-sm text-indigo-600 hover:text-indigo-800">Sign Out</button>
                  </div>
                </>
              ) : (
                <button onClick={signInGoogle} className="flex items-center space-x-2 bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>Sign in with Google</span>
                </button>
              )}
            </div>
            <div className="flex space-x-2 ">
              <Link to="/" className="flex justify-center items-center gap-2 bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-200">
                <House size={20} /> <span className="hidden sm:block">Home</span>
              </Link>
              <Link to="/edit" className="flex justify-center items-center gap-2 bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-200">
                <FileText size={20} /> <span className="hidden sm:block">My Resume</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <form className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Job Category</label>
              <select
                id="category"
                onChange={categoryHandler}
                value={category}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select Job Category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat.replace(/%20/g, " ").replace(/%2F/g, "/").replace(/%2C/g, "")}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">Job Level</label>
              <select
                id="level"
                onChange={levelHandler}
                value={level}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">All Job Levels</option>
                <option value="Mid%20Level">Mid Level</option>
                <option value="Senior%20Level">Senior Level</option>
                <option value="management">Management</option>
              </select>
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select
                id="country"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select Country</option>
                {/* Add country options here */}
              </select>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          {allJobs?.results && allJobs.results.map((job, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{job.name}</h2>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-white font-semibold text-sm">
                    {index + 1}
                  </span>
                </div>
                <p className="text-gray-600 mb-2"><span className="font-semibold">Company Location:</span> {job.locations.length > 0 ? job.locations[0].name : "No location available"}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold">Company Name:</span> {job.company.name}</p>
                <p className="text-gray-600 mb-4"><span className="font-semibold">Publication Date:</span> {new Date(job.publication_date).toLocaleDateString()}</p>
                
                <div className="mt-4 flex items-center space-x-4">
                  <button
                    onClick={() => toggleJobDetails(index)}
                    className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {activeIndex === index ? (
                      <>
                        <span>See less</span>
                        <ChevronUp className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        <span>See more</span>
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                  {activeIndex === index && (
                    <button
                      onClick={() => handleGenerateResume(job)}
                      className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Generate Resume with AI
                    </button>
                  )}
                </div>
              </div>
              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <div className="mt-4 prose max-w-none" dangerouslySetInnerHTML={{ __html: job.contents }} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center space-x-2 mt-8">
          {[1, 2, 3, 4, 5].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-800 font-semibold text-sm hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;