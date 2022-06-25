import React from 'react'
import './login.css'
import { useState } from 'react'

function Login() {

  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
      e.preventDefault()
      if(!email || !password) {
          alert("Please fill all details")
          return
      }
      setEmail('')
      setPassword('')
  }

  return (
    <div className='main-container'>
        <div className="container-login">
        <div className="title">Login Page</div>
        <div className="content">
          <form onSubmit={onSubmit}>
            <div className="user-details">

              <div className="input-box">
                <span className="details">User Id</span>
                <input type="text" placeholder="Enter your user id" value={email} required onChange={(e) => setEmail(e.target.value)} />
              </div>

            <div className="input-box">
              <span className="details">Password</span>
              <input type="text" placeholder="Enter your password" value={password} required onChange={(e) => setPassword(e.target.value)}  />
            </div>

          </div>
          
          <div className="button">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login