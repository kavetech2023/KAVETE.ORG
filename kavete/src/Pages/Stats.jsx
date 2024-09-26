import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { Sun, Moon, Menu, X, Home, FileText, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

// Mock data for the charts (unchanged)
const applicationData = [
  { name: 'Jan', applications: 4 },
  { name: 'Feb', applications: 7 },
  { name: 'Mar', applications: 5 },
  { name: 'Apr', applications: 10 },
  { name: 'May', applications: 8 },
  { name: 'Jun', applications: 12 },
]

const viewData = [
  { name: 'Mon', views: 10 },
  { name: 'Tue', views: 15 },
  { name: 'Wed', views: 13 },
  { name: 'Thu', views: 17 },
  { name: 'Fri', views: 20 },
  { name: 'Sat', views: 14 },
  { name: 'Sun', views: 12 },
]

// Mock function to simulate AI response
const getAIResponse = async (message) => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
  const responses = [
    "That's a great question about job searching. Have you considered networking events?",
    "Regarding your resume, it's important to highlight your key achievements.",
    "For interview preparation, I recommend researching the company thoroughly.",
    "Don't forget to follow up after submitting applications. It shows initiative!",
    "Tailoring your cover letter for each application can significantly improve your chances.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

export default function Stats() {
  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', content: 'Hello! How can I assist you with your job search today?' },
  ])
  const [userInput, setUserInput] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#34495e' : '#ffffff'
    document.body.style.color = isDarkMode ? '#ecf0f1' : '#2c3e50'
  }, [isDarkMode])

  const handleSendMessage = async () => {
    if (userInput.trim() === '') return

    setChatMessages(prev => [...prev, { role: 'user', content: userInput }])
    setUserInput('')
    setIsLoading(true)

    try {
      const aiResponse = await getAIResponse(userInput)
      setChatMessages(prev => [...prev, { role: 'bot', content: aiResponse }])
    } catch (error) {
      console.error('Error getting AI response:', error)
      setChatMessages(prev => [...prev, { role: 'bot', content: 'Sorry, I encountered an error. Please try again.' }])
    } finally {
      setIsLoading(false)
    }
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      {/* Navbar */}
      <nav className={`bg-white dark:bg-gray-800 shadow`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to={"/"}><img src={logo} alt="" /></Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to={"/"} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Go Home</Link>
             
                <button
                  onClick={toggleTheme}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200`}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:hover:bg-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Dashboard</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Applications</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Resume</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Settings</a>
            <button
              onClick={toggleTheme}
              className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200`}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className={`bg-white overflow-hidden shadow rounded-lg ${isDarkMode ? 'dark:bg-gray-800' : ''}`}>
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Total Applications</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900 dark:text-white">46</div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <svg className="self-center flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="sr-only">Increased by</span>
                        20%
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className={`bg-white overflow-hidden shadow rounded-lg ${isDarkMode ? 'dark:bg-gray-800' : ''}`}>
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Resume Views</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900 dark:text-white">101</div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <svg className="self-center flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="sr-only">Increased by</span>
                        5%
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className={`bg-white overflow-hidden shadow rounded-lg ${isDarkMode ? 'dark:bg-gray-800' : ''}`}>
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Interview Invitations</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900 dark:text-white">5</div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-yellow-600">
                        2 scheduled this week
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className={`bg-white overflow-hidden shadow rounded-lg ${isDarkMode ? 'dark:bg-gray-800' : ''}`}>
            <div className="p-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Job Applications Over Time</h3>
              <div className="mt-2 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={applicationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#4a5568' : '#e2e8f0'} />
                    <XAxis dataKey="name" stroke={isDarkMode ? '#e2e8f0' : '#4a5568'} />
                    <YAxis stroke={isDarkMode ? '#e2e8f0' : '#4a5568'} />
                    <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#4a5568' : '#ffffff', color: isDarkMode ? '#e2e8f0' : '#4a5568' }} />
                    <Legend />
                    <Bar dataKey="applications" fill="#4299e1" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className={`bg-white overflow-hidden shadow rounded-lg ${isDarkMode ? 'dark:bg-gray-800' : ''}`}>
            <div className="p-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Resume Views This Week</h3>
              <div className="mt-2 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={viewData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#4a5568' : '#e2e8f0'} />
                    <XAxis dataKey="name" stroke={isDarkMode ? '#e2e8f0' : '#4a5568'} />
                    <YAxis stroke={isDarkMode ? '#e2e8f0' : '#4a5568'} />
                    <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#4a5568' : '#ffffff', color: isDarkMode ? '#e2e8f0' : '#4a5568' }} />
                    <Legend />
                    <Line type="monotone" dataKey="views" stroke="#48bb78" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* AI Job Search Assistant */}
        <div className={`mt-8 bg-white overflow-hidden shadow rounded-lg ${isDarkMode ? 'dark:bg-gray-800' : ''}`}>
          <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">AI Job Search Assistant</h3>
            <div className="h-64 overflow-y-auto mb-4 p-4 border rounded-lg dark:border-gray-700">
              {chatMessages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block px-4 py-2 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'}`}>
                    {message.content}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"></div>
                </div>
              )}
            </div>
            <div className="flex">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}