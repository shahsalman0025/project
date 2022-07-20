import React from 'react';
import './get_started.css'
import {Link, useNavigate} from "react-router-dom";
import img12 from "../Assets/angina.png";
import img13 from "../Assets/alicejones.png";
import img14 from "../Assets/lucywinter.png";
import img15 from "../Assets/juliawinter.png";
import fireAuth from '../fire-auth';
import { db } from '../fire-auth';
import Navbar from './navbar/navbar';
const GetStarted=()=> {


    
    let email = localStorage.getItem('UMail');
    var UserName = db.collection("user");
    var Name = UserName.where("Email", "==", email);



  
    return ( <>
    <Navbar/>

      <div class="get_started">
   
    <div class="scenario">
        <h3>Select A Scenario To Get Started</h3>
       <div className='scenariobody'>
         {/* 1 */}
         <div class="scene">
            <div class="scene_img">
                <img src={img12} alt=""/>
                <br/>
                <span>Daniel Jenkins</span>
            </div>
            <Link to="/chatbot" class="scene_text">
                <p>You are a clinician working in the community. Daniel Jenkins a 62-year-old man has come in today complaining of chest pain. He looks generally well in himself but has asked to be seen by yourself. Please Take a focused history from him and proceed from the consultation to formulate a management plan.</p>                </Link>
        </div>
        {/* 2 */} 
        <div class="scene">
            <div class="scene_img">
                <  img src={img14} alt=""/>
                <br/>
                <span>Lucy Winter</span>
            </div>
            <Link to="/utiChatroom" class="scene_text">
                <p>You are a clinician working in the community. Lucy Winter a 19-year-old lady has come in today due to pain whilst urinating. The patient appears well and stable in herself.</p>                </Link>
        </div>
        {/* 2 */}
        <div class="scene">
            <div class="scene_img">
                <img src={img13} alt=""/>
                <br/>
                <span>Alice Jones</span>
            </div>
            <Link to="/asthamaChatroom" class="scene_text">
               <p>Alice Jones a 16-year-old girl has come in today due to experiencing several episodes of difficulty breathing. The patient appears well, with no signs of breathing difficulties present during the start of the consultation.</p>                </Link>
        </div>
        {/* 2 */}
        <div class="scene">
            <div class="scene_img">
                <img src={img15} alt=""/>
                <br/>
                <span>Jack Wilby</span>
            </div>
            <Link to="/migraineChatroom" class="scene_text">
                <p>You are a clinician working in the community. Jack Wilby a 26-year-old male has come in today due to experiencing a severe persistent headache. The patient appears stable but very unwell in himself</p>                </Link>
        </div>
        {/* 2 */}
        {/* <div class="scene">
            <div class="scene_img">
                <img src={img12} alt=""/>
                <br/>
                <span>daniel Jankins</span>
            </div>
            <Link to="/meningitisChatroom" class="scene_text">
                <h2>Meningitis</h2>                </Link>
                </div> */}

       </div>
       
    </div>
</div></> );
}

export default GetStarted;