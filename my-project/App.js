
import 'react-chatbot-kit/build/main.css';
import './App.css';
import { useState,useEffect, Children, Component } from 'react';

import HomePage from './components/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import LoginPage from './components/login';
import SignUpPage from './components/signUp';
import GetStarted from './components/get_started';
import ChatBott from './components/angina-bot/chatbot';
import UtiChatRoom from './components/uti-bot/utiChatroom';
import AsthamaChatRoom from './components/asthama-bot/asthamaChatroom';
import MeningitisChatRoom from './components/meningitis-bot/meningitisChatroom';
import MigraineChatRoom from './components/migraine-bot/migraineChatroom';
import Ref from './components/refrence/ref';
import EditDetails from './components/edit_details/editDetails';
import AnginaMainQuestions from './components/angina-bot/angina-questions/angina_main_question';
import AsthamaMainQuestion from './components/asthama-bot/asthama-questions/asthama_main_question';
import MeningitisMainQuestion from './components/meningitis-bot/meningitis-questions/meningitis_main_question';
import MigraineMainQuestion from './components/migraine-bot/migraine-questions/migraine_main_question';
import UtiMainQuestion from './components/uti-bot/uti-questions/uti_main_question';
import FinalScore from './components/fianl_Score/finalscore';
import AuthGuard from './components/AuthGuard';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import fireAuth from './fire-auth';
import LoginWrapper from './LoginWrapper';



function App(){
    // localStorage.setItem('login','false');
    // localStorage.setItem('user','false')
    
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

    // const handleLogin =()=>{
    //     clearErrors();
    //     fireAuth
    //     .auth()
    //     .signInWithEmailAndPassword(email,password)
    //     // .then(()=>{
    //     // })
    //     .catch(err=>{
    //         switch(err.code){
    //             case "auth/invalid-email":
    //             case "auth/user-disabled":
    //             case "auth/user-not-found":
    //                 setEmailError(err.message);
    //                 break;
    //             case "auth/wrong-password":
    //                 setPasswordError(err.message);
    //                 break;
                    
           
    //         };
    //     });
    // };
    
    // const handleSignup = () =>{
    //     clearErrors();
    //     fireAuth
    //     .auth()
    //     .createUserWithEmailAndPassword(email,password)
    //         .then(()=>{
    //             Navigate('/get_started');
    //     })
    //     .catch(err=>{
    //         switch(err.code){
    //             case "auth/email-already-in-use":
    //             case "auth/invalid-email":
    //             case "auth/user-not-found":
    //                 setEmailError(err.message);
    //                 break;
    //             case "auth/weak-password":
    //                 setPasswordError(err.message);
    //                 break;

    //         };
    //     });
    // }

    // const handleLogout =()=>{
    //     localStorage.setItem('login','false')
    //     console.log("loged out")
    //     fireAuth.auth().signOut();

    // Navigate('/login')    
    // };

    const authListener =()=>{
        fireAuth.auth()
        .onAuthStateChanged(user =>{
            if(user){
                clearInputs();
                setUser(user);
                console.log("user");
            localStorage.setItem('login',true)
            setLoginIn(true);
            }
            else{
                setUser('');
            localStorage.setItem('login',false)
                console.log("no user")
            }
        });
    };

useEffect(()=>{
try {
  authListener();
 

} catch (error) {
  console.log(error);
  
}
},[]);
  return (
    <Router>
      

      <Routes>
    <Route exact path="/"  element={ <HomePage/>}> </Route>
    

    
       {/* <Route exact path="/get_started"  element={<AuthGuard Component={GetStarted(handleLogout)}/> }> </Route> */}
       {/* <Route exact path="/get_started"  element={
       <GetStarted 
       handleLogout={handleLogout}
       />} /> */}
       <Route exact path="/get_started"  element={ <AuthGuard Component={GetStarted}/> }> </Route>
       <Route exact path="/chatbot"  element={ <AuthGuard Component={ChatBott}/> }> </Route>
       <Route exact path="/utiChatroom"  element={ <AuthGuard Component={UtiChatRoom}/>}> </Route>   
       <Route exact path="/asthamaChatroom"  element={ <AuthGuard Component={AsthamaChatRoom}/> }> </Route>  
       <Route exact path="/meningitisChatroom"  element={ <AuthGuard Component={ MeningitisChatRoom}/> }> </Route>   
       <Route exact path="/migraineChatroom"  element={ <AuthGuard Component={MigraineChatRoom }/> }> </Route> 
       <Route exact path="/finalscore"  element={ <AuthGuard Component ={FinalScore} /> }> </Route> 
   
       <Route exact path="/ref"  element={ <Ref/>}> </Route>  
       <Route exact path="/editDetails"  element={ <EditDetails/>}> </Route>
       <Route exact path="/agina_main_question"  element={ <AnginaMainQuestions/>}> </Route>  
       <Route exact path="/asthama_main_question"  element={ <AsthamaMainQuestion/>}> </Route>  
       <Route exact path="/meningitis_main_question"  element={ <MeningitisMainQuestion/>}> </Route>
       <Route exact path="/migraine_main_question"  element={ <MigraineMainQuestion/>}> </Route>  
       <Route exact path="/uti_main_question"  element={ <UtiMainQuestion/>}> </Route>  
       <Route exact path="/login"  element={ <LoginWrapper Component ={LoginPage} /> }> </Route> 


       <Route exact path="/signUp"  element={ <SignUpPage/>}> </Route>
   
   
     
    </Routes> 
    </Router>
   
    
  );
}



export default App;
