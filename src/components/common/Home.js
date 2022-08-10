import React from 'react'
import { useNavigate } from 'react-router-dom'
// import logo from  '../assets/bird_logo_b&w.png'

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
      <button onClick={handleClickRegister}>Sign up</button>  
    </div>
    <div className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
      <button onClick={handleClickLogin}>Sign in</button>  
    </div>

  </div>)
}

export default Home