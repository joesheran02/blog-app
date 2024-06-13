import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Login = () => {
    const [data,changeData] = useState(
        {
            "email":"",
            "password":""
        }
    )
    const inputHandler = (event) => {
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue = () => {
        axios.post("http://localhost:8080/signIn",data).then(
            (response) => {
                if (response.data.status ==="success") {
                    alert("Success")
                } else {
                    alert("Details dont Match!! Retry")
                }
            }
        ).catch()
    }
  return (
    <div>
        <Navbar/>
        <center>x
      <div className="container">
        <div className="row g-5">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Email ID</label>
                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" name="password" value={data.password} onChange={inputHandler} id="" className="form-control"  />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readValue}>Sign In</button>
                <br /><br /><br /><Link to="/signup">New Here? Click here to Sign Up NOW !!!</Link>
            </div>
        </div>
      </div>
      </center>
    </div>
  )
}

export default Login
