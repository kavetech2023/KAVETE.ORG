import React, { useState } from "react";
import TagLine from "./TagLine";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-500 transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is AI Job Finder?",
      answer: "AI Job Finder is an innovative platform that uses artificial intelligence to match job seekers with the most suitable job opportunities based on their skills, experience, and preferences."
    },
    {
      question: "How does AI Job Finder work?",
      answer: "Our AI analyzes your profile and job preferences, then scans thousands of job listings to find the best matches. It continuously learns from your interactions to improve its recommendations over time."
    },
    {
      question: "Is AI Job Finder free to use?",
      answer: "We offer a free basic plan with limited features. For full access to all our AI-powered tools and premium job listings, we have affordable subscription plans available."
    },
    // Add more FAQs as needed
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <TagLine>FAQs</TagLine>
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;