import React from "react";
import './home.css'
import img1 from './images/Untitled design.png';
import imgFb from "./images/facebook.svg";
import imgG from "./images/googleplus.svg";
import imgT from "./images/twitter.svg";
import imgI from "./images/instagram.svg";
import imgC from "./images/computer.png"
import imgM from "./images/mouse.svg";
import imgL from "./images/Layer.png";
import {Link} from "react-router-dom";
import Result from "./result";
import Contact from "./contact";
function HomePage() {
    return ( <> 
      <div class="Home">
        <div class="nav">
            <div class="home-logo"><img src={img1} height="80px" width="130px" alt="no img"/>
              
            </div>
            <div class="home-nav">
                <ul>
                    <li><a class="active" href="">Home</a></li>
                    <li><a class="Result" href="#result">Result</a></li>
                    <li><a class="ContactUs" href="#contact">Contact Us</a></li>
                </ul>
                <div class="login-home">
                    <span class="login-home-btn"><Link to="/login">LOGIN</Link> </span>
                </div>
            </div>
        </div>
        <div class="home-main">
            <div class="home-links">
                <img src={imgFb} width="20px" alt="no img"/>
                <img src={imgG} width="30px" alt="no img"/>
                <img src={imgT} width="30px" alt="no img"/>
                <img src={imgI} width="30px" alt=""/>
            </div>
            <div class="home-text">
                <h3 className="Font_Lato">CONSULTATION SKILLS</h3>
                <h3>FOR HEALTHCARE</h3>
                <p>PERFORMANCE BASED MEDICATIONS AND CONSULTING</p>
                <button class="pill bg-blue">Get Started</button>
            </div>
            <div class="home-img">
                <img src={imgC} width="380px" height="280px" alt="no img"/>
    
            </div>
        </div>
        <div class="home-center">
            <div class="center-home">
                <img src={imgM} alt="no img"/>
            </div>
        </div>
        <div class="home-layer">
            <div class="layer-img"><img src={imgL} width="500px" height="400px" alt="no img"/></div>
            <div class="layer-text">
                <h5 className="Font_Lobster">Biography</h5>
                <h1>Who We Are</h1>
                <p>We are a team of healthcare students looking to disrupt the medical training and exam preparation market through the introduction of a revolutionary AI-inspired intuitive chat interface which allows aspiring medical and healthcare professionals to practice their symptom and diagnosis identification.</p>
                    <button class="pills bg-blue">SEE MORE</button>
            </div>
        </div>
    
    </div>
    <div id="result"><Result/></div>
    <div id="contact"><Contact/></div>
    
    </> );
}

export default HomePage;