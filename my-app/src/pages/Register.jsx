import React from 'react'

function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">MST_Social</h3>
                <span className="loginDesc">connect with friends and the world around you on MST_SOCIAL</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input placeholder='userName' type="text" className="loginInput" />
                <input placeholder='email' type="text" className="loginInput" />
                    <input placeholder='password' type="text" className="loginInput" />
                    <input placeholder='password again' type="text" className="loginInput" />
                    <button className='loginBtn'>Sign Up</button>
                    <button className="loginRegisterButton">log into account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register