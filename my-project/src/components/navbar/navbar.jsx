import React, { Component } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import logo from '../../Assets/idk.png'
import './navbar.css'
import fireAuth from '../fire-auth';
export class Navbar extends Component {
  
   
   handleLogout =()=>{
      localStorage.setItem('login','false')
      console.log("loged out")
      fireAuth.auth().signOut();
     const Navi=useNavigate();
      Navi('/login')    
  };
  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-midlinks">
        <Link to="/get_started">Patient Encounter</Link>
        <Link to="">Revision Notes</Link>
        <Link to="">Exam Cram</Link>
        <Link to="">Profile</Link>
        <Link to="">Contact Us</Link>

        </div>
        <div className="navbar-cornerlinks">
         <button onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    )
  }
}

export default Navbar