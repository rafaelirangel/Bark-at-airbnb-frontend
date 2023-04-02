import React, { useState } from 'react'

import './Register.css'

const Register = ({ handleRegister, closeRegisterModal }) => {

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })

  const handleInput = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleRegister(userInfo)
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        
        <div className="closeBtn">
          <button onClick={() => closeRegisterModal(false)}>X</button >
        </div>

        <div className='login'>
          <h2>Register</h2>

          <form onSubmit={handleSubmit}>
            <div className='email'>
              <label className='emaiLabel' htmlFor='email'>Email</label>
              <input className='emailInput' type='text' name='email' onChange={handleInput} value={userInfo.email} />
            </div>

            <div className='password'>
              <label className='passwordLabel' htmlFor='password'>Password</label>
              <input className='passwordInput' type='password' name='password' onChange={handleInput} value={userInfo.password} />
            </div>
            <input className='submitBtn' value='Submit' type='submit' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
