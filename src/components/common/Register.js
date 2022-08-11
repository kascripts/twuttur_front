import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/bird_logo_b&w.png'
import { baseUrl } from '../../config'


function Register() {
  // Using react router to navigate
  const navigate = useNavigate()
  const [button, updateButton] = useState(false)
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  })
  //  Errors in state
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
  })
  function handleChange(event) {
    // name = field you've typed in, e.g. the email input
    // value = the text that's in that field
    const { name, value } = event.target
    setFormData({
      ...formData, //  This is whatever the form data was before, all it's fields.
      [name]: value, 
    })
    setErrors({
      ...errors,
      [name]: '',
    })
  }
    
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await axios.post(`${baseUrl}/register`, formData)
      updateButton(!button)
      navigate('/login')
    } catch (err) {    
      setErrors(err.response.data.errors)
    }
  }

    
  return <div className="column is-half is-offset-one-quarter" id="register">
    <form onSubmit={handleSubmit} >
      <div className=" logo mb-5" >
        <img src={logo} alt="logo" width="230px"  />
      </div>
  
      <div className="field">
        <label className="label has-text-light">Username</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name={'username'} 
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <small className="errors">{errors.username}</small>}
        </div>
      </div>

      <div className="field">
        <label className="label has-text-light">Email</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name={'email'}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="errors">{errors.email}</small>}
        </div>
      </div>

      <div className="field">
        <label className="label has-text-light">Password</label>
        <div className="control">
          <input
            className="input"
            type="password"
            name={'password'}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <small className="errors">{errors.password}</small>}
        </div>
      </div>

      <div>
        <button type="submit" className="button is-danger has-text-weight-bold mt-1 " onClick={handleSubmit}>Submit</button>
      </div>
      
    </form>

      
  </div>
}
export default Register