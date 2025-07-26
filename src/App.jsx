import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('darkMode')
    return savedTheme ? JSON.parse(savedTheme) : false
  })

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="app-layout">
        {/* Left Sidebar with Navbar only */}
        <div className="sidebar">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        
        {/* Main Content Area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App