/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'


function App() {
  // ! Add your routes in here!

  const [status, setStatus] = React.useState([])


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
      <h1 className="title">Tweet Index One</h1>
      <div className="container">
        {status.map(status => <h2 key={status.id}>{status.text}</h2>)}
      </div>
    </div>



  // <h1>Hello world!</h1>
  )
}

export default App
