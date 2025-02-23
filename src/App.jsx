import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')

  const handleLogin = (username) => {
    setIsAuthenticated(true)
    setUsername(username)
  }

  const Navigation = () => {
    const location = useLocation()
    return (
      <nav>
        {location.pathname !== '/login' && !isAuthenticated && <Navigate to="/login" />}
        {isAuthenticated && <Navigate to="/dashboard" />}
      </nav>
    )
  }

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard username={username} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
