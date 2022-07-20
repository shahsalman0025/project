import React, { useEffect, useState } from 'react';
import './login.css';
import imgDesign from "./images/Untitled design.png";
import imgBackBtn from "./images/backbtn.svg";
import imgLogin from "./images/login.png";
import {Link} from "react-router-dom";


const LoginPage=(props)=>
 {
    
    const{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
       }=props;

    return ( 
        <>  <div class="login">
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

            <span>Welcome to I- Diagknows</span>
        </div>
        <div class="text-area">
            <h3>Welcome to I- Diagknows</h3>
            <div class="input">
            <input 
                type="text"
                placeholder="Email"
                autoFocus
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />
            <p className='error-msg'>{emailError}</p>
            <br/>
            <input 
                type="password"
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />
            <p className='error-msg'>{passwordError}</p>
            <br/>
            <div class="rightbtn"> 
             {/* <Link class="bills" to="/get_started" >Login</Link> */}
             <button onClick={handleLogin}>Login</button>
            
            </div>
            {/* <div class="rightbtn"><input type="submit" name="login" class="bills bg-blue" value="LOGIN"/></div> */}
        </div>
        
            <div class="log">
                <div class="log-img">
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
        <div class="footer">
            <span>Dont Have An Account?. <Link to="/signUp">Signup</Link></span>
        </div>
       </div>
    </div></>
     );
}

export default LoginPage;