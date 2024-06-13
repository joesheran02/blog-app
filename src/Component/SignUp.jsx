import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const SignUp = () => {
    const [data, setData] = useState(
        {
            "name": "",
            "email": "",
            "password": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        axios.post("http://localhost:8080/signUp", data).then(
            (response) => {
                if (response.data.status === "success") {
                    alert("Success")
                } else {
                    alert("Something Went Wrong !!!")
                }
            }
        ).catch()
    }
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">User Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email ID</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" value={data.password} onChange={inputHandler} id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                              <center> <br /><br /><br /> <button className="btn btn-success" onClick={readValue}>SIgn Up</button>
                            <br /><br /><br />  <Link to='/'>Click Here is You Are Already Registered</Link> </center> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
