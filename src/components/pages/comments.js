import React from 'react'
import axios from 'axios'


function Comments() {

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
      <div className="text-base width-auto font-medium text-white flex-shrink">
        {status.map(status => <h5 key={status.id}>{status.user.comments}</h5>)}
      </div>
      <div className="text-base width-auto font-medium text-white flex-shrink">
        {status.map(status => <h5 key={status.id}>{status.comments}</h5>)}
      </div>
    </div>

  )
}




export default Comments