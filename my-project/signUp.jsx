import React from 'react';
import axios from 'axios';
import './login.css';
import imgDesign from "./images/Untitled design.png";
import imgBackBtn from "./images/backbtn.svg";
import {Link} from "react-router-dom";
import imgLogin from "./images/login.png";
import {useState} from 'react';

const SignUpPage=(props)=>
 {
    
    const{
        email,
        setEmail,
        password,
        setPassword,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
       }=props;


    return ( <>
    <div class="login">
        <div class="login-img">
            <div class="logo">
                {/* <img src={imgDesign} width="150px" alt="no img"/>  */}
            </div>
        <div class="imglog">
            <img src={imgLogin}   alt="no img"/>
        </div>
    </div>
       <div class="login-Form">
     
        <div class="header">
            <div class="back"><img src={imgBackBtn} width="30px" height="20px" alt="no img"/></div>
    
            
        </div>
        <div class="text-area">
            <h3>Welcome to I- Diagknows</h3>
            <div class="input">
            <input type="text" placeholder='name'  />
            <br/>
            <input 
                type="email"
                placeholder="Email"
                autoFocus
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />
            <p className='error-msg'>{emailError}</p>
            <br/>
            <input type="password" name="password1" id="password1"
                value={password}
            onChange={(e)=> setPassword(e.target.value)} />
            <p className='error-msg'>{passwordError}</p>
            <br/>
            <div class="rightbtn">
                <button onClick={handleSignup}> Signup</button>
            </div>
        </div>
        
            <div class="log">
                <div class="log-img">
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
        <div class="footer">
            <span>Already Have An Account? <Link to="/login">login Now</Link></span>
        </div>
    
        </div>
       </div></> );
}

export default SignUpPage;