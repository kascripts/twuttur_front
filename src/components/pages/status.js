import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


// import GoogleLogin from 'react-google-login'
// import { FcGoogle } from 'react-icons/fc'
import { baseUrl } from '../../config'

function Status() {

  const [status, setStatus] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/status')
      setStatus(data)
    }
    getData()
  }, [])




  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    text: "",
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const { data } = await axios.post(`${baseUrl}/status`, formData)
      localStorage.setItem('token', data.token)
      navigate('/status')
    } catch (err) {
    }
  }
  return <div>
    <form onSubmit={handleSubmit} className="form">
      <div className="field">
        {/* <label className="label">Email</label> */}
        <div className="control">
          <input
            className="column is-5"
            type="text"
            name={'username'}
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field ">
        {/* <label className="label has-text-light">Password</label> */}
        <div className="control">
          <input
            className="column is-5"
            type="password"
            name={'password'}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
    <section>
      <div class="pl-16">
          <p class="text-base width-auto font-medium text-white flex-shrink">
            {status.map(status = <p key={status.id}>{status.text}</p> )}
          </p>
    
      </div>
    </section>
  </div>


  {/* <div className="my-google mt-2">
        <GoogleLogin 
          clientId = {`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
          render = {(renderProps) => (
            <button
              type = "button"
              className="p-2 has-text-weight-bold "
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FcGoogle className="google-button mr-2 "/> Sign in with Google
            </button>
            )}
          />
      </div> */}


}


export default Status
