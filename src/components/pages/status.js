import React, { useState } from 'react'
import axios from 'axios'


function Status() {

  const [status, setStatus] = React.useState([])
  
  // const navigate = useNavigate()

  const [textData, setTextData] = useState({
    text: "",
  })

  const token = localStorage.getItem('token')
  function getPayload() {
    if (!token) {
      return false
    }
    const parts = token.split('.')
    if (parts.length < 3) {
      return false
    }
    return JSON.parse(atob(parts[1]))
  }
  
  function getUserId() {
    const payload = getPayload()
    return payload.sub
  }

  function handleChange(event) {
    setTextData({
      ...textData,
      [event.target.name]: event.target.value,
    })
  }
  async function handleSubmit(event) {
    event.preventDefault()
    
    const id = getUserId()
    const newTextData = {
      ...textData,
      id
    }
    console.log(newTextData)


    try {
      const { data } = await axios.post('/api/status', newTextData, {
        headers: { Authorization: `Bearer ${token}` },
      })
    } catch (err) {
      console.log(err.response.data)
    }
  }

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/status')
      setStatus(data)

      // console.log(data[0].text)
    }
    
    getData()

  }, [])

  return (
    <div className="section">
      <div className="formWrapper">
      <form onChange={handleChange} onSubmit={handleSubmit}>
      <textarea className="input" name="text" />
      <button type="submit">button</button>
        
      </form>
      </div>
      <h1 className="title">Tweet Index One</h1>
      <div className="text-base width-auto font-medium text-white flex-shrink">
        {status.map(status => <div> <h5 key={status.id}>{status.user.username}</h5>
          <p className="tweetcontent">{status.text}</p></div>
        )}
      </div>
      <div className="text-base width-auto font-medium text-white flex-shrink">
        {status.map(status => <h5 key={status.id}>{status.text}</h5>)}
      </div>
    </div>

  )
}




export default Status