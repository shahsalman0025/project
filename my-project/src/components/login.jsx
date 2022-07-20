import React, { useEffect, useState } from 'react';
import './login.css';
import imgDesign from "./images/Untitled design.png";
import imgBackBtn from "./images/backbtn.svg";
import imgLogin from "./images/loginimg.png";
import nextimg from "./images/submit.svg" 
import {Link, useNavigate} from "react-router-dom";
import fireAuth from '../fire-auth';




const LoginPage=()=>
 {
     const [user,setUser]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const [hasAccount,setHasAccount]=useState(false);
    const [isLogIn,setLoginIn]=useState(false);

    const clearInputs =()=>{
        setEmail('');
        setPassword('');
    };

    const clearErrors =()=>{
        setEmailError('');
        setPasswordError('');
    };


    // const{
    //     email,
    //     setEmail,
    //     password,
    //     setPassword,
    //     handleLogin,
    //     handleSignup,
    //     hasAccount,
    //     setHasAccount,
    //     emailError,
    //     passwordError,
    //     isLogIn
    //    }=props;
       const Navigate=useNavigate();
   
    const handleLogin =()=>{
        clearErrors();
        fireAuth
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then(()=>{
            const user = fireAuth.auth().currentUser;
            localStorage.setItem('UMial',email)
         
            
                if (user !== null) {
                    const emailVerified = user.emailVerified;
                    console.log(emailVerified)
                    if(emailVerified){
                        Navigate('/get_started')
                    }
                    else{
                        alert("your email is not Varified please check your inbox")
                    }
                }
                
        })
        .catch(err=>{
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setPasswordError("Invalid Email/Password");
                    break;
                case "auth/wrong-password":
                    setPasswordError("Invalid Email/Password");
                    break;
                    
           
            };
        });
    };
   

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
            <div class="back"><Link to="/" ><img src={imgBackBtn} width="30px" height="20px" alt="no img"/></Link></div>

            <span>Welcome to I- Diagnose</span>
        </div>
        <div class="text-area">
            <h3 className='Font_Lato'>Welcome to I- Diagnose</h3>
            <div class="input">
            <input 
                type="text"
                placeholder="Email"
                autoFocus
                required
                value={email}
                onChange={(e)=>{ setEmail(e.target.value); clearErrors();}}
            />
            <p className='error-msg'>{emailError}</p>
            <br/>
            <input 
                type="password"
                placeholder='Password'
                required
                value={password}
                onChange={(e)=>{ setPassword(e.target.value); clearErrors();}}
            />
            <p className='error-msg'>{passwordError}</p>
            <br/>
            <div class="rightbtn"> 
             {/* <Link class="bills" to="/get_started" >Login</Link> */}
             <button className='logBtn' onClick={handleLogin}>LOGIN <img src={nextimg}  /></button>
            
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