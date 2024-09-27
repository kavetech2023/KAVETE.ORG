import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Privacy Policy</h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">1. Introduction</h2>
          <p className="text-base text-gray-700 mb-4">
            Welcome to our Privacy Policy. This document explains how we collect, use, and protect your personal information when you use our services.
          </p>

          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">2. Information We Collect</h2>
          <p className="text-base text-gray-700 mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-5 mb-4 text-base text-gray-700">
            <li>Personal information (e.g., name, email address, phone number)</li>
            <li>Usage data (e.g., how you interact with our services)</li>
            <li>Device information (e.g., IP address, browser type)</li>
          </ul>

          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">3. How We Use Your Information</h2>
          <p className="text-base text-gray-700 mb-4">
            We use your information to:
          </p>
          <ul className="list-disc pl-5 mb-4 text-base text-gray-700">
            <li>Provide and improve our services</li>
            <li>Communicate with you about our services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">4. Data Security</h2>
          <p className="text-base text-gray-700 mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>

          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">5. Your Rights</h2>
          <p className="text-base text-gray-700 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-5 mb-4 text-base text-gray-700">
            <li>Access your personal information</li>
            <li>Correct inaccurate personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to the processing of your personal information</li>
          </ul>

          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">6. Changes to This Privacy Policy</h2>
          <p className="text-base text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">7. Contact Us</h2>
          <p className="text-base text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-base text-gray-700">
            Email: privacy@example.com<br />
            Address: 123 Privacy Street, Securetown, ST 12345
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;