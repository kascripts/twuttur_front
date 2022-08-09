import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import styles from '../styles/Login.module.scss'

function Home(){

  const navigate = useNavigate()


  function handleClickRegister() {

    navigate("/register")
  }

  function handleClickLogin() {

    navigate("/login")
  }

  return ( <div className="section is-large">
    <div className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
      <button onClick={handleClickRegister}>Sugn up</button>  
    </div>
    <div className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
      <button onClick={handleClickLogin}>Sugn un</button>  
    </div>

  </div>)
}

export default Home