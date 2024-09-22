import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { JobContext } from "../Context/JobContext";
import { categories } from "../Data/categories";
import { motion } from "framer-motion";
import  Modal  from "../Components/Modal";

const Dashboard = () => {
  const { allJobs, category, level, setJobLevel, setCategory, setPage } =
    useContext(JobContext);

  const [displayJob, setDisplayJob] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <div className="w-full  px-3 max-w-[850px] mx-auto">
        <button
          className="bg-black px-4 py-2 rounded-md text-white cursor-pointer"
          onClick={toggleModal}
        >
          + My Jobs
        </button>
        {/* Dashboard Modal */}
        <div className={`${modalVisible ? "" : "hidden"} absolute flex `}>
          <Modal />
        </div>
        {/* Dashboard Modal */}

        <div className="mt-10 grid items-center grid-cols-1 gap-3  w-full">
          <div className="flex items-center sticky bg-white rounded-lg shadow-lg p-6 h-full">
            <form className="flex flex-col sm:flex-row items-start gap-3">
              <div>
                <label htmlFor="category">Select Job Category</label>
                <select
                  onChange={categoryHandler}
                  value={category}
                  className="w-full sm:w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  className=" w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">All Job Levels</option>
                  <option value="Mid%20Level">Mid Level</option>
                  <option value="Senior%20Level">Senior Level</option>
                  <option value="management">Management</option>
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

                <div className="pl-0">
                  <p className=" ">
                    {job.locations.length > 0
                      ? job.locations[0].name
                      : "No location available"}
                  </p>
                  <p className="">{job.company.name}</p>
                  <p className="">
                    {new Date(job.publication_date).toLocaleDateString()}
                  </p>
                  <p
                    className="hidden"
                    style={{
                      flexDirection: "column",
                      fontSize: "13px",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: job.contents,
                    }}
                  />
                  <p>
                    <span>Apply</span>
                    <span>Save</span>
                    <span>foward</span>
                  </p>
                </div>
              </div>
            ))}
          <div className="pagination-table">
            {[1, 2, 3, 4, 5].map((pageNumber) => (
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
        <div
          className="flex items-center space-x-4 mt-4 bg-white border border-indigo/400/30 rounded-lg shadow-lg p-6 w-full h-full max-w-screen-xl
        "
        >
          iam the bottom.
        </div>
      </div>
    </>
  );
};

export default Dashboard;
