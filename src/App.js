import React from 'react'

import 

function App() {
  // ! Add your routes in here!

const [status, setStatus] = React.useState([])


  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/status')
      const json = await res.json()
      setBooks(json)

    }
  getData()

  }, [])

  return (
    <div className="section">
      <h1 className="title">Tweet Index One</h1>
      <div className="container">
        {status.map(status => <h2 key={status._id}>{status.title}</h2>)}
      </div>
    </div>



    // <h1>Hello world!</h1>
  )
}

export default App
