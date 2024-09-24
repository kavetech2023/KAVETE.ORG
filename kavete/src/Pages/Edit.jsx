import { House } from "lucide-react";
import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { JobContext } from "../Context/JobContext";
import { useReactToPrint } from "react-to-print";
import run from "../Config/gemini";
import {auth,provider} from './firebase.js'


const Edit = () => {
  const { saved } = useContext(JobContext);

  const [moreInfoData, setMoreInfoData] = useState(null);
  const [close, setClose] = useState(false);
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setResumeData(prev => ({ ...prev, [name]: value }))
  }

  const componentRef = useRef();
  const handlePrintRTP = useReactToPrint({
    content: () => componentRef.current,
  });

  const open = () => {
    close ? setClose(false) : setClose(true);
  };

  const handleMoreInfo = async () => {
    try {
      const processedData = await run(
        `Create a comprehensive CV for a position based on ${saved}. Include the following sections: Summary, Skills, Experience, Education, Projects, and Certifications with examples of made up companies. Tailor the CV to highlight some guessed Specific Skills or Achievements and format the paragraph under the sections into unordered lists."`
      ); // Assuming run exists to process the data
      const formattedData = formatData(processedData); // Assuming formatData exists to format the data

      setMoreInfoData(formattedData);
    } catch (error) {
      console.error("Error processing data:", error);
      // Handle errors gracefully (e.g., display an error message to the user)
    }
  };

  function formatData(data) {
    // Remove three asterisks
    data = data.replace(/\*\*\*/g, "");
    data = data.replace(/\*\*/g, "</b>");
  
    // Replace single asterisk with an unordered list
    data = data.replace(/\*/g, "<li className='text-gray-700'>");
  
    // Split the data into paragraphs
    const paragraphs = data.split("\n\n");
  
    // Initialize an array to store formatted paragraphs
    const formattedParagraphs = [];
  
    // Loop through each paragraph and apply styling based on its role
    for (const paragraph of paragraphs) {
      let formattedParagraph = paragraph;
  
      // Detect paragraph role using regular expressions or other techniques
      if (paragraph.startsWith("Summary")) {
        formattedParagraph =
          `<h2 className="font-bold text-gray-800 mb-2">` +
          formattedParagraph +
          `</h2>`;
      } else if (paragraph.startsWith("Skills")) {
        formattedParagraph =
          `<h3 className="font-bold">` + formattedParagraph + `</h3>`;
      } else if (paragraph.startsWith("Experience")) {
        formattedParagraph =
          `<h3 className="font-bold">` + formattedParagraph + `</h3>`;
      } else if (paragraph.startsWith("Education")) {
        formattedParagraph =
          `<h3 className="font-bold">` + formattedParagraph + `</h3>`;
      } else if (paragraph.startsWith("Projects")) {
        formattedParagraph =
          `<h3 className="font-bold">` + formattedParagraph + `</h3>`;
      } else if (paragraph.startsWith("Certifications")) {
        formattedParagraph =
          `<h3 className="font-bold">` + formattedParagraph + `</h3>`;
      }
  
      // Wrap the paragraph in a div if it follows a header
      if (formattedParagraphs.length > 0 && formattedParagraphs[formattedParagraphs.length - 1].startsWith('<h')) {
        formattedParagraph = `<div>${formattedParagraph}</div>`;
      }
  
      // Add formatted paragraph to the array
      formattedParagraphs.push(formattedParagraph);
    }
  
    // Join formatted paragraphs into a single string
    const formattedString = formattedParagraphs.join("<br><br>");
  
    return formattedString;
  }
  return (

<div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Form */}
          <div className="w-full md:w-1/3 p-8 bg-gray-50">
            <h1 className="text-2xl font-bold mb-6 text-indigo-600">AI Resume Editor</h1>
            <div className="space-y-4">
              <input
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                name="name"
                placeholder="Full Name"
                value={resumeData.name}
                onChange={handleInputChange}
              />
              <input
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                name="title"
                placeholder="Professional Title"
                value={resumeData.title}
                onChange={handleInputChange}
              />
              <input
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                name="email"
                type="email"
                placeholder="Email"
                value={resumeData.email}
                onChange={handleInputChange}
              />
              <input
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                name="phone"
                placeholder="Phone"
                value={resumeData.phone}
                onChange={handleInputChange}
              />
              <textarea
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                name="summary"
                placeholder="Professional Summary"
                value={resumeData.summary}
                onChange={handleInputChange}
                rows="4"
              />
              <textarea
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                name="skills"
                placeholder="Skills (comma-separated)"
                value={resumeData.skills}
                onChange={handleInputChange}
                rows="3"
              />
              <textarea
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                name="experience"
                placeholder="Work Experience"
                value={resumeData.experience}
                onChange={handleInputChange}
                rows="6"
              />
              <textarea
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                name="education"
                placeholder="Education"
                value={resumeData.education}
                onChange={handleInputChange}
                rows="4"
              />
              <textarea
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                name="projects"
                placeholder="Projects"
                value={resumeData.projects}
                onChange={handleInputChange}
                rows="4"
              />
              <textarea
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                name="certifications"
                placeholder="Certifications"
                value={resumeData.certifications}
                onChange={handleInputChange}
                rows="3"
              />
              <div className="flex space-x-2">
                <input
                  className="flex-grow px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                  placeholder="Enter job title for AI generation"
                
                />
                <button
                  className="bg-green-500 text-white font-bold py-2 px-4 text-sm rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out transform hover:scale-105 disabled:opacity-50"
                 
                >
                 
                </button>
              </div>
              <button
                className="w-full bg-indigo-600 text-white font-bold py-2 px-4 text-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out transform hover:scale-105"
                onClick={() => console.log('Save resume:', resumeData)}
              >
                Save Resume
              </button>
            </div>
          </div>

          {/* Preview */}
          <div className="w-full md:w-2/3 p-8 bg-white">
            <div className="border-2 border-gray-200 p-6 rounded-lg shadow-inner bg-white">
              <h2 className="text-3xl font-bold mb-1 text-gray-800">{resumeData.name || 'Your Name'}</h2>
              <h3 className="text-xl text-gray-600 mb-2">{resumeData.title || 'Professional Title'}</h3>
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                {resumeData.email && <span>{resumeData.email}</span>}
                {resumeData.phone && <span>{resumeData.phone}</span>}
              </div>
              <hr className="my-4 border-gray-300" />
              {resumeData.summary && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Professional Summary</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{resumeData.summary}</p>
                </div>
              )}
              <hr className="my-4 border-gray-300" />
              {resumeData.skills && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.split(',').map((skill, index) => (
                      <span key={index} className="text-sm bg-gray-200 text-gray-700 py-1 px-2 rounded">
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <hr className="my-4 border-gray-300" />
              {resumeData.experience && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Work Experience</h3>
                  {resumeData.experience.split('\n\n').map((job, index) => {
                    const [title, ...details] = job.split('\n');
                    return (
                      <div key={index} className="mb-3">
                        <h4 className="text-md font-semibold text-gray-700">{title}</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 leading-relaxed">
                          {details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
              <hr className="my-4 border-gray-300" />
              {resumeData.education && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Education</h3>
                  {resumeData.education.split('\n').map((edu, index) => (
                    <p key={index} className="text-sm text-gray-700 mb-1">{edu}</p>
                  ))}
                </div>
              )}
              <hr className="my-4 border-gray-300" />
              {resumeData.projects && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Projects</h3>
                  {resumeData.projects.split('\n\n').map((project, index) => {
                    const [title, ...details] = project.split('\n');
                    return (
                      <div key={index} className="mb-3">
                        <h4 className="text-md font-semibold text-gray-700">{title}</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 leading-relaxed">
                          {details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
              <hr className="my-4 border-gray-300" />
              {resumeData.certifications && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Certifications</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-700 leading-relaxed">
                    {resumeData.certifications.split('\n').map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
