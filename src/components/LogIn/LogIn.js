import React, { useState } from 'react'

import './LogIn.css'

export default function LogIn ({handleLogIn}) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
})
const handleInput = (e) => {
  setUserInfo ({
    ...userInfo,
    [e.target.name]: e.target.value
  })
}
const handleSubmit = (e) => {
  e.preventDefault()
  handleLogIn(userInfo)
}
  return (
    <div>
      <h2>Log In</h2>

      <form onSubmit = {handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' onChange={handleInput} value={userInfo.email} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='text' name='password' onChange={handleInput} value={userInfo.password} />
        </div>
        <input value='Submit' type='submit' />
      </form>
    </div>
  ) 
}

