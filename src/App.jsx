import React from 'react'
import user_icon from '../src/assets/person.png'
import email_icon from '../src/assets/email.png'
import password_icon from '../src/assets/password.png'


function App() {
  return <>
  <div className='container'>

    <div className="header">
      <div className="text">SIGNUP</div>
      <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon}/>
          <input type='text' placeholder='Name'></input>
        </div>

        <div className="input">
          <img src={email_icon}/>
          <input type='email' placeholder='Email'></input>
        </div>

        <div className="input">
          <img src={password_icon}/>
          <input type='password' placeholder='Password'></input>
        </div>
        </div>
        <div className="forget-password">Forget Password<span>clickhere</span>
        </div>

        <div className="submit-container  ">
          <button className='submit'>Signup</button>
          <button className='submit'>Login</button>
        </div>
      </div>
  
  
  </>
}

export default App