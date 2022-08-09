/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from "./components/common/Register"
// import Login from "./components/common/Login"
import Home from "./components/common/Home"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      
      </Routes>
    </Router>
  )
}

export default App
