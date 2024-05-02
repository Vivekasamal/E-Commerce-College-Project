import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from "../Assets/login.jpg"
// Initialization for ES Users
function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    if (email === "souvik@gmail.com" && password === "12345678") {
      setIsLoggedIn(true)
      navigate("/")
    }
    else {
      alert("email or password is incorrect")
    }
  }

  return (
    <div class="min-h-screen flex items-center justify-center w-full" style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover', // Set background size to cover
      backgroundRepeat: 'no-repeat', // Prevent background image from repeating
      backgroundPosition: 'center' // Center the background image
    }}>
      <div class="dark:bg-gray-900 opacity-80 shadow-md filter: blur-none rounded-lg px-8 py-6 w-[400px]">
        <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
        <form>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
            <input type="email" id="email" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com" required />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input type="password" id="password" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required />
          </div>
          <div class="flex items-center justify-between mb-4">
            <Link to="/signup"
              class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create
              Account</Link>
          </div>
          <button type="submit"
            onClick={handleLogin}
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid  border-[#5356e3] hover:text-white">Login</button>
          {
            isLoggedIn && (
              <p>logged in successfully</p>
            )
          }
        </form>
      </div>
    </div>
  )
}

export default Login