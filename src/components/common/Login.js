// import React, { useState } from 'react'
// // import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import styles from '../styles/Login.module.scss'
// import { handleInputChange } from 'react-select/dist/declarations/src/utils'


// export default function Login() {


//   const navigate = useNavigate()

//   const [FormData, setFormData] = useState({
//     password: "",
//     email: "",
//   })

//   function handleChange(event) {
//     const { name, value } = event.target
//     setFormData({
//       ...FormData,
//       [name]: value,

//     })
//   }


//   async function handleSubmit(event){
//     event.preventDefault()

//     try {
//       const { data } = await axios.post(`${baseUrl}/login`, formData)
//       localStorage.setItem('token', data.token)
//       navigate('/all-sounds')
//     } catch (err) {
//   }
//   }

//   return 
    
      // <div className=" logo mb-5" >
      //   <img src={logo} alt="logo" width="230px"  />
      // </div>

      // <div>
      //   <form onSubmit={handleSubmit} className="form">
      //     <div className="field">
      //       {/* <label className="label">Email</label> */}
      //       <div className="control">
      //         <input
      //           className="column is-5"
      //           type="text"
      //           name={'email'}
      //           placeholder="E-mail"
      //           value={formData.email}
      //           onChange={handleChange}
      //         />
      //       </div>
      //     </div>
        
      //     <div className="field ">
      //       {/* <label className="label has-text-light">Password</label> */}
      //       <div className="control">
      //         <input
      //           className="column is-5"
      //           type="password"
      //           name={'password'}
      //           placeholder="Password"
      //           value={formData.password}
      //           onChange={handleChange}
      //         />
      //       </div>  
      //     </div>
      //     <button className="button is-small is-danger has-text-weight-bold ">Login</button>
      //   </form>
      // </div>


}

