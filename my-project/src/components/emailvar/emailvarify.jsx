import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './emailvarify.css'
export class Emailvarify extends Component {
  render() {
    return (
      <div className="email_main">
        <div className='redirect'>
        <h1>Verification Link Has Been Sent to your email</h1>
        <br />
        <Link to="/login">Go to Login</Link>
      </div>
      </div>
    )
  }
}

export default Emailvarify