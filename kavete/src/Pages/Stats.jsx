import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'

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

export default function Stats() {
  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', content: 'Hello! How can I assist you with your job search today?' },
  ])
  const [userInput, setUserInput] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    setIsSidebarOpen(mediaQuery.matches)

    const handler = (e) => setIsSidebarOpen(e.matches)
    mediaQuery.addListener(handler)
    return () => mediaQuery.removeListener(handler)
  }, [])

  const handleSendMessage = () => {
    if (userInput.trim() === '') return

    setChatMessages(prev => [...prev, { role: 'user', content: userInput }])

    setTimeout(() => {
      setChatMessages(prev => [...prev, { role: 'bot', content: 'I understand you said: "' + userInput + '". How else can I help you?' }])
    }, 1000)

    setUserInput('')
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const sidebarStyle = {
    position: 'fixed',
    top: 0,
    left: isSidebarOpen ? 0 : '-250px',
    width: '250px',
    height: '100%',
    backgroundColor: isDarkMode ? '#2c3e50' : '#f8f9fa',
    transition: 'left 0.3s ease-in-out',
    zIndex: 1000,
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
  }

  const mainContentStyle = {
    marginLeft: isSidebarOpen ? '250px' : '0',
    transition: 'margin-left 0.3s  ease-in-out',
    padding: '20px',
    backgroundColor: isDarkMode ? '#34495e' : '#ffffff',
    color: isDarkMode ? '#ecf0f1' : '#2c3e50',
    minHeight: '100vh',
  }

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={{ padding: '20px', borderBottom: `1px solid ${isDarkMode ? '#4a6278' : '#dee2e6'}` }}>
          <h2 style={{ margin: 0, color: isDarkMode ? '#ecf0f1' : '#2c3e50' }}>Job Search</h2>
        </div>
        <nav style={{ padding: '20px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: isDarkMode ? '#ecf0f1' : '#2c3e50', textDecoration: 'none' }}>Dashboard</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: isDarkMode ? '#ecf0f1' : '#2c3e50', textDecoration: 'none' }}>Applications</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: isDarkMode ? '#ecf0f1' : '#2c3e50', textDecoration: 'none' }}>Resume</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: isDarkMode ? '#ecf0f1' : '#2c3e50', textDecoration: 'none' }}>Settings</a>
            </li>
          </ul>
        </nav>
        <div style={{ marginTop: 'auto', padding: '20px' }}>
          <button
            onClick={toggleTheme}
            style={{
              padding: '10px',
              backgroundColor: isDarkMode ? '#ecf0f1' : '#2c3e50',
              color: isDarkMode ? '#2c3e50' : '#ecf0f1',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle} className='w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50'>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            display: 'block',
            marginBottom: '20px',
            padding: '10px',
            backgroundColor: isDarkMode ? '#4a6278' : '#e9ecef',
            color: isDarkMode ? '#ecf0f1' : '#2c3e50',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>

        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Job Search Dashboard</h1>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div style={{ width: '30%', minWidth: '250px', padding: '20px', backgroundColor: isDarkMode ? '#4a6278' : '#f0f0f0', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
            <h3 style={{ marginTop: '0', color: isDarkMode ? '#ecf0f1' : '#2c3e50' }}>Total Applications</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: isDarkMode ? '#ecf0f1' : '#2c3e50' }}>46</p>
            <p style={{ fontSize: '14px', color: isDarkMode ? '#bdc3c7' : '#666' }}>+20% from last month</p>
          </div>
          <div style={{ width: '30%', minWidth: '250px', padding: '20px', backgroundColor: isDarkMode ? '#4a6278' : '#f0f0f0', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
            <h3 style={{ marginTop: '0', color: isDarkMode ? '#ecf0f1' : '#2c3e50' }}>Resume Views</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: isDarkMode ? '#ecf0f1' : '#2c3e50' }}>101</p>
            <p style={{ fontSize: '14px', color: isDarkMode ? '#bdc3c7' : '#666' }}>+5% from last week</p>
          </div>
          <div style={{ width: '30%', minWidth: '250px', padding: '20px', backgroundColor: isDarkMode ? '#4a6278' : '#f0f0f0', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
            <h3 style={{ marginTop: '0', color: isDarkMode ? '#ecf0f1' : '#2c3e50' }}>Interview Invitations</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: isDarkMode ? '#ecf0f1' : '#2c3e50' }}>5</p>
            <p style={{ fontSize: '14px', color: isDarkMode ? '#bdc3c7' : '#666' }}>2 scheduled this week</p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div style={{ width: '48%', minWidth: '300px', marginBottom: '20px' }}>
            <h3 style={{ color: isDarkMode ? '#ecf0f1' : '#2c3e50' }}>Job Applications Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={applicationData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#4a6278' : '#ccc'} />
                <XAxis dataKey="name" stroke={isDarkMode ? '#ecf0f1' : '#666'} />
                <YAxis stroke={isDarkMode ? '#ecf0f1' : '#666'} />
                <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#4a6278' : '#fff', color: isDarkMode ? '#ecf0f1' : '#2c3e50' }} />
                <Legend />
                <Bar dataKey="applications" fill={isDarkMode ? '#3498db' : '#8884d8'} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ width: '48%', minWidth: '300px', marginBottom: '20px' }}>
            <h3 style={{ color: isDarkMode ? '#ecf0f1' : '#2c3e50' }}>Resume Views This Week</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={viewData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#4a6278' : '#ccc'} />
                <XAxis dataKey="name" stroke={isDarkMode ? '#ecf0f1' : '#666'} />
                <YAxis stroke={isDarkMode ? '#ecf0f1' : '#666'} />
                <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#4a6278' : '#fff', color: isDarkMode ? '#ecf0f1' : '#2c3e50' }} />
                <Legend />
                <Line type="monotone" dataKey="views" stroke={isDarkMode ? '#2ecc71' : '#82ca9d'} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h3 style={{ color: isDarkMode ? '#ecf0f1' : '#2c3e50' }}>AI Job Search Assistant</h3>
          <div style={{ border: `1px solid ${isDarkMode ? '#4a6278' : '#ccc'}`, borderRadius: '8px', padding: '20px', marginBottom: '20px', backgroundColor: isDarkMode ? '#2c3e50' : '#fff' }}>
            <div style={{ height: '300px', overflowY: 'auto', marginBottom: '20px' }}>
              {chatMessages.map((message, index) => (
                <div key={index} style={{ marginBottom: '10px', textAlign: message.role === 'user' ? 'right' : 'left' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    backgroundColor: message.role === 'user' ? (isDarkMode ? '#3498db' : '#007bff') : (isDarkMode ? '#4a6278' : '#f0f0f0'),
                    color: message.role === 'user' ? '#fff' : (isDarkMode ? '#ecf0f1' : '#2c3e50')
                  }}>
                    {message.content}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex' }}>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  marginRight: '10px',
                  padding: '10px',
                  borderRadius: '4px',
                  border: `1px solid ${isDarkMode ? '#4a6278' : '#ccc'}`,
                  backgroundColor: isDarkMode ? '#34495e' : '#fff',
                  color: isDarkMode ? '#ecf0f1' : '#2c3e50'
                }}
              />
              <button
                onClick={handleSendMessage}
                style={{
                  padding: '10px 20px',
                  backgroundColor: isDarkMode ? '#3498db' : '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}