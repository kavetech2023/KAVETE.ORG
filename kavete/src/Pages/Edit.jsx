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
    name: '[Your Name]',
    title: 'Brand Designer',
    email: '[Your Email Address]',
    phone: '[Your Phone Number]',
    summary: `* Experienced and passionate brand designer with 4-6 years of experience in agency or in-house settings.
* Proven ability to design, own, and lead complex projects from initial ideation to final asset execution.
* Strong understanding of design fundamentals including typography, color, layout, and visual hierarchy.
* Expert in design software such as Adobe Creative Suite and Figma.
* Adept at creating scalable brand systems that ensure consistency across various media and touchpoints.
* Collaborative team player with excellent communication and presentation skills, capable of effectively conveying design rationale to stakeholders.
* Passionate about building strong, impactful brands that resonate with target audiences.`,
    skills: `Brand Design, Digital Design, Print Design, Adobe Creative Suite, Figma, Sketch, Webflow, Typography, Color Theory, Visual Hierarchy, Presentation Skills, Communication Skills, Project Management, Teamwork`,
    experience: `[Company Name], [City, State] | [Job Title] | [Date Start] - [Date End]
* [List key responsibilities and accomplishments related to brand design, including projects, skills utilized, and any notable achievements]
* [For example: Led the development and implementation of a new brand identity for [Company product/service]. Designed and implemented a cohesive brand system across website, social media, and marketing materials. Collaborated with marketing team to ensure brand consistency across all touchpoints.]

[Previous Company Name], [City, State] | [Job Title] | [Date Start] - [Date End]
* [List key responsibilities and accomplishments related to brand design, including projects, skills utilized, and any notable achievements]

[Previous Company Name], [City, State] | [Job Title] | [Date Start] - [Date End]
* [List key responsibilities and accomplishments related to brand design, including projects, skills utilized, and any notable achievements]`,
    education: '',
    projects: '',
    certifications: ''
  });
  const [suggestions, setSuggestions] = useState({
    summary: '',
    skills: '',
    experience: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prev => ({ ...prev, [name]: value }));
  };

  const componentRef = useRef();
  const handlePrintRTP = useReactToPrint({
    content: () => componentRef.current,
  });

  const open = () => {
    setClose(prev => !prev);
  };

  const generateSuggestions = async () => {
    setIsLoading(true);
    try {
      const prompt = `Create a comprehensive CV for a ${saved || 'professional'} position. Include the following sections: Summary, Skills, and Experience. Format the content under each section into bullet points.`;
      const response = await run(prompt);
      const formattedData = formatData(response);
      setSuggestions({
        summary: formattedData.summary?.join('\n') || '',
        skills: formattedData.skills?.join(', ') || '',
        experience: formattedData.experience?.join('\n\n') || ''
      });
    } catch (error) {
      console.error("Error generating suggestions:", error);
      alert("Failed to generate suggestions. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const applySuggestion = (field) => {
    setResumeData(prev => ({ ...prev, [field]: suggestions[field] }));
  };

  function formatData(data) {
    // Remove three asterisks and double asterisks
    data = data.replace(/\*\*\*/g, "").replace(/\*\*/g, "");

    // Split the data into sections
    const sections = data.split("\n\n");

    // Initialize an object to store formatted sections
    const formattedSections = {};

    // Loop through each section and format it
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
              <div className="relative">
                <textarea
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                  name="summary"
                  placeholder="Professional Summary"
                  value={resumeData.summary}
                  onChange={handleInputChange}
                  rows="6"
                />
                {suggestions.summary && (
                  <button
                    className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-md"
                    onClick={() => applySuggestion('summary')}
                  >
                    Apply Suggestion
                  </button>
                )}
              </div>
              <div className="relative">
                <textarea
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                  name="skills"
                  placeholder="Skills (comma-separated)"
                  value={resumeData.skills}
                  onChange={handleInputChange}
                  rows="4"
                />
                {suggestions.skills && (
                  <button
                    className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-md"
                    onClick={() => applySuggestion('skills')}
                  >
                    Apply Suggestion
                  </button>
                )}
              </div>
              <div className="relative">
                <textarea
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                  name="experience"
                  placeholder="Work Experience"
                  value={resumeData.experience}
                  onChange={handleInputChange}
                  rows="8"
                />
                {suggestions.experience && (
                  <button
                    className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-md"
                    onClick={() => applySuggestion('experience')}
                  >
                    Apply Suggestion
                  </button>
                )}
              </div>
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
              <button
                className="w-full bg-green-500 text-white font-bold py-2 px-4 text-sm rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out transform hover:scale-105 disabled:opacity-50"
                onClick={generateSuggestions}
                disabled={isLoading}
              >
                {isLoading ? 'Generating...' : 'Generate AI Suggestions'}
              </button>
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
                  <ul className="list-disc pl-5 text-sm text-gray-700 leading-relaxed">
                    {resumeData.summary.split('\n').map((item, index) => (
                      <li key={index}>{item.replace(/^\* /, '')}</li>
                    ))}
                  </ul>
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
                            <li key={i}>{detail.replace(/^\* /, '')}</li>
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
                            <li key={i}>{detail.replace(/^\* /, '')}</li>
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