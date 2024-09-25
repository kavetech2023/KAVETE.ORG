import React, { useContext, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { House, FileText, Plus, Minus, Loader } from "lucide-react";
import { JobContext } from "../Context/JobContext";
import { useReactToPrint } from "react-to-print";
import run from "../Config/gemini";

const WorkExperienceSection = ({ experience, index, updateExperience, removeExperience, generateSuggestion }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateExperience(index, { ...experience, [name]: value });
  };

  const handleSuggestion = async () => {
    setIsLoading(true);
    try {
      const suggestion = await generateSuggestion(experience.jobTitle, experience.company);
      updateExperience(index, { ...experience, description: suggestion });
    } catch (error) {
      console.error("Error generating suggestion:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2 border-b border-gray-200 pb-4 mb-4">
      <input
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        name="jobTitle"
        placeholder="Job Title"
        value={experience.jobTitle}
        onChange={handleInputChange}
      />
      <input
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        name="company"
        placeholder="Company"
        value={experience.company}
        onChange={handleInputChange}
      />
      <div className="flex space-x-2">
        <input
          className="w-1/2 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          name="startDate"
          placeholder="Start Date"
          value={experience.startDate}
          onChange={handleInputChange}
        />
        <input
          className="w-1/2 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          name="endDate"
          placeholder="End Date"
          value={experience.endDate}
          onChange={handleInputChange}
        />
      </div>
      <div className="relative">
        <textarea
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          name="description"
          placeholder="Job Description"
          value={experience.description}
          onChange={handleInputChange}
          rows="4"
        />
        <button
          className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-md flex items-center"
          onClick={handleSuggestion}
          disabled={isLoading}
        >
          {isLoading ? <Loader className="animate-spin mr-1" size={12} /> : null}
          {isLoading ? 'Generating...' : 'Get AI Suggestion'}
        </button>
      </div>
      <button
        className="text-red-500 hover:text-red-700 text-sm"
        onClick={() => removeExperience(index)}
      >
        Remove Experience
      </button>
    </div>
  );
};

const Edit = () => {
  const { saved } = useContext(JobContext);
  const [resumeData, setResumeData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    summary: '',
    skills: '',
    experiences: [{ jobTitle: '', company: '', startDate: '', endDate: '', description: '' }],
    education: '',
    projects: '',
    certifications: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const componentRef = useRef();
  const handlePrintRTP = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prev => ({ ...prev, [name]: value }));
  };

  const addExperience = () => {
    if (resumeData.experiences.length < 5) {
      setResumeData(prev => ({
        ...prev,
        experiences: [...prev.experiences, { jobTitle: '', company: '', startDate: '', endDate: '', description: '' }]
      }));
    }
  };

  const updateExperience = (index, newExperience) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.map((exp, i) => i === index ? newExperience : exp)
    }));
  };

  const removeExperience = (index) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index)
    }));
  };

  const generateSuggestion = async (jobTitle, company) => {
    const prompt = `Generate a detailed job description for a ${jobTitle} position at ${company}. Include key responsibilities and achievements. Format the content as bullet points.`;
    const response = await run(prompt);
    return response.split('\n').filter(line => line.trim() !== '').join('\n');
  };

  const generateFullResume = async () => {
    setIsLoading(true);
    try {
      const prompt = `Create a comprehensive CV for a ${saved || 'professional'} position. Include the following sections: Summary, Skills, and Work Experience (for each job provided). Format the content under each section into bullet points.

      Current resume data:
      ${JSON.stringify(resumeData, null, 2)}`;

      const response = await run(prompt);
      const formattedData = formatData(response);
      
      setResumeData(prev => ({
        ...prev,
        summary: formattedData.summary?.join('\n') || '',
        skills: formattedData.skills?.join(', ') || '',
        experiences: formattedData.experience?.map((exp, index) => ({
          ...prev.experiences[index],
          description: exp.join('\n')
        })) || prev.experiences
      }));
    } catch (error) {
      console.error("Error generating resume:", error);
      alert("Failed to generate resume. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  function formatData(data) {
    data = data.replace(/\*\*\*/g, "").replace(/\*\*/g, "");
    const sections = data.split("\n\n");
    const formattedSections = {};

    for (const section of sections) {
      const [title, ...content] = section.split(":\n");
      const formattedContent = content.join("\n")
        .split("\n")
        .map(item => item.trim().replace(/^\* /, ""))
        .filter(item => item !== "");

      formattedSections[title.toLowerCase()] = formattedContent;
    }

    return formattedSections;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-indigo-600">AI Resume Editor</h1>
          <div className="flex space-x-2">
            <Link to="/" className="flex items-center gap-2 bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-200">
              <House size={20} /> <span className="hidden sm:inline">Home</span>
            </Link>
            <Link to="/stats" className="flex items-center gap-2 bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-200">
              <FileText size={20} /> <span className="hidden sm:inline">Performance</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Form */}
          <div className="w-full md:w-1/2 p-8 bg-gray-50 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
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
              <div>
                <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
                {resumeData.experiences.map((experience, index) => (
                  <WorkExperienceSection
                    key={index}
                    experience={experience}
                    index={index}
                    updateExperience={updateExperience}
                    removeExperience={removeExperience}
                    generateSuggestion={generateSuggestion}
                  />
                ))}
                {resumeData.experiences.length < 5 && (
                  <button
                    className="mt-2 flex items-center text-indigo-600 hover:text-indigo-800"
                    onClick={addExperience}
                  >
                    <Plus size={16} className="mr-1" /> Add Experience
                  </button>
                )}
              </div>
              <textarea
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                name="education"
                placeholder="Education"
                value={resumeData.education}
                onChange={handleInputChange}
                rows="3"
              />
              <textarea
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                name="projects"
                placeholder="Projects"
                value={resumeData.projects}
                onChange={handleInputChange}
                rows="3"
              />
              <textarea
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                name="certifications"
                placeholder="Certifications"
                value={resumeData.certifications}
                onChange={handleInputChange}
                rows="3"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out disabled:opacity-50"
                onClick={generateFullResume}
                disabled={isLoading}
              >
                {isLoading ? 'Generating...' : 'Generate Full Resume with AI'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                onClick={handlePrintRTP}
              >
                Print Resume
              </motion.button>
            </div>
          </div>

          {/* Preview */}
          <div className="w-full md:w-1/2 p-8 bg-white overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
            <div className="border-2 border-gray-200 p-6 rounded-sm bg-white" ref={componentRef}>
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
              {resumeData.experiences.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Work Experience</h3>
                  {resumeData.experiences.map((exp, index) => (
                    <div key={index} className="mb-3">
                      <h4 className="text-md font-semibold text-gray-700">{exp.jobTitle} at {exp.company}</h4>
                      <p className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 leading-relaxed mt-2">
                        {exp.description.split('\n').map((item, i) => (
                          <li key={i}>{item.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              <hr className="my-4 border-gray-300" />
              {resumeData.education && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Education</h3>
                  <p className="text-sm text-gray-700">{resumeData.education}</p>
                </div>
              )}
              <hr className="my-4 border-gray-300" />
              {resumeData.projects && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Projects</h3>
                  <p className="text-sm text-gray-700">{resumeData.projects}</p>
                </div>
              )}
              <hr className="my-4 border-gray-300" />
              {resumeData.certifications && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Certifications</h3>
                  <p className="text-sm text-gray-700">{resumeData.certifications}</p>
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