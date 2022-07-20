import React from 'react';
import axios from 'axios';
import './login.css';
import imgDesign from "./images/Untitled design.png";
import imgBackBtn from "./images/backbtn.svg";
import {Link, useNavigate} from "react-router-dom";
import imgLogin from "./images/loginimg.png";
import {useState} from 'react';
import {db} from '../fire-auth';
import fireAuth from '../fire-auth';
import nextimg from "./images/submit.svg" 


const SignUpPage=()=>
 {
    const [Name,setName]=useState('');
    const [user,setUser]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const [hasAccount,setHasAccount]=useState(false);
       const[password1,setPassword1]=useState("");
       const Navigate=useNavigate();
       const clearErrors =()=>{
        setEmailError('');
        setPasswordError('');
    };

       const clearInputs =()=>{
        setEmail('');
        setPassword('');
        setPassword1('');
    };

      const handleSignupA=()=>{
        if(password != password1)
        {
            alert("Passwords don't match");
            clearInputs();
            clearErrors();
        }else
        {
           fireAuth.auth().createUserWithEmailAndPassword(email,password)
                // fireAuth
                // .auth()
                // .createUserWithEmailAndPassword(email,password)
        
          
           
                    .then(()=>{
                        

                        // db.collection("users").add({
                        //     Name: Name,
                        //     Email: email,
                        //     Password: password
                        // })
                        // .then((docRef) => {
                        //     console.log("Document written with ID: ", docRef.id);
                        // })
                        // .catch((error) => {
                        //     console.error("Error adding document: ", error);
                        // });
                        const usr = fireAuth.auth().currentUser;

usr.updateProfile({
  displayName: Name,

}).then(() => {
    fireAuth.auth().currentUser.sendEmailVerification()
    .then(() => {
        Navigate('/emailvarify');
    });

}).catch((error) => {
  // An error occurred
  // ...
});  
                        

                })
                .catch(err=>{
                    switch(err.code){
                        case "auth/email-already-in-use":
                        case "auth/invalid-email":
                        case "auth/user-not-found":
                            setEmailError(err.message);
                            break;
                        case "auth/weak-password":
                            setPasswordError(err.message);
                            break;
        
                    };
                });
            }
          
            
        
      }
   
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
            <div class="back"><Link to="/" ><img src={imgBackBtn} width="30px" height="20px" alt="no img"/></Link></div>
    
            
        </div>
        <div class="text-area">
            <h3 className='Font_Lato'>Welcome to I- Diagnose</h3>
            <div class="input">
            <input type="text" placeholder='Name' 
                autoFocus
             required
             value={Name}
             onChange={(e)=> setName(e.target.value)}
            
            />
            <p></p>
            <br/>
            <input 
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />
            <p className='error-msg'>{emailError}</p>
            <br/>
            <input 
            type="password"
             name="password" 
             id="password"
             placeholder='Password'
             value={password}
             onChange={(e)=> setPassword(e.target.value)} />
            <p className='error-msg'>{passwordError}</p>
            <br/>
            <input 
            type="password" 
            name="password1" 
            value={password1}
            placeholder='Retype Password'
             onChange={(e)=> setPassword1(e.target.value)} />
             <br/>
            
            <div class="rightbtn">
                <button className='logBtn' onClick={handleSignupA}> SIGNUP <img src={nextimg}  /></button>
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