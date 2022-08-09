import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {


  const navigate = useNavigate()

  const [FormData, setFormData] = useState({
    password: "",
    email: "",
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData({
      ...FormData,
      [name]: value,

    })
  }


  async function handleSubmit(event){
    event.preventDefault()

    try {
      const { data } = await axios.post(`${baseUrl}/login`, formData)
      localStorage.setItem('token', data.token)
      navigate('/all-sounds')
    } catch (err) {
  }
  }

export default Register