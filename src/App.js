/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from "./components/common/Register"
import Login from "./components/common/Login"
import Home from "./components/common/Home"
import Status from "./components/pages/status"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/status" element={<Status />} />
        
        
      
      </Routes>
    </Router>
  )
}

export default App
