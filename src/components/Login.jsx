import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css' 

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username && password) {
      // Handle login or sign-up logic here
      console.log(isSignUp ? 'Signed up:' : 'Logged in:', { username, password })
      onLogin(username)
      navigate('/dashboard')
    } else {
      alert('Please enter both username and password')
    }
  }

  return (
    <div className="login-container">
      <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
      </button>
    </div>
  )
}

export default Login
