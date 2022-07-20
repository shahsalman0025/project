import React from "react";
import './contact.css'
import img1Envlope from "../Assets/envelope.svg";
import imgOldhand from "../Assets/old-handphone.svg";
import imgGP from "../Assets/google-plus-white.svg";
import imgIn from "../Assets/instagram-white.svg";
import imgMaps from "../Assets/maps-and-flags.svg";
import imgTwitter from "../Assets/twitter-white.svg"
import imgFbb from "../Assets/facebook-white.svg";
import imgAsset from "../Assets/map.png";
import "../Assets/footer-bg.png";


function Contact() {
    return ( <>
    <div class="Contact">
      <div class="Contact_Text">
        <h5 className="Font_Lobster">Contact Us</h5>
        <h3>Lets Get connect</h3>
      </div>
      <div class="map">
        <img src={imgAsset} alt=""/>
      </div>
      <div class="Contact_Newsletter">
        <h5 className="Font_Lobster">NewsLetter</h5>
        <h5 className="Font_Lato">Do you want To get updates on exciting offers and new features?<br />Sign up to our email newsletter below </h5>
        <div class="Contact_Newsletter-Form">
            <input type="text" placeholder="&nbsp;Drop your Email"/>
            <button class="pill">Subscribe</button>
        </div>
      </div>
    </div>
      <div class="Footer">
        <div class="touch">
            <h5>Stay in touch</h5>
           <img src={imgFbb} alt=""/>
           <img src={imgGP} alt=""/>
           <img src={imgIn} alt=""/>
           <img src={imgTwitter} alt=""/>
        </div>
        <div class="Quick_links">
            <h5>Quick links</h5>
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Location</a></li>
                <li><a href="">Offices</a></li>
            </ul>
        </div>
        <div class="Hours">
            <h5>Hours</h5>
            <ul>
                <li>Monday:     9:00-18:00</li>
                <li>Tuesday:    9:00-18:00</li>
                <li>Wednesday:  9:00-18:00</li>
                <li>Thursday:   9:00-18:00</li>
                <li>Friday:     9:00-18:00</li>
            </ul>
        </div>
        <div class="Address">
            <h5>Contact</h5>
            <ul>
                <li> <img src={imgOldhand} alt=""/>
                     000-000-000</li>
                <li><img src={img1Envlope} alt=""/>
                     info@email.com</li>
                <br/>
                <li><img src={imgMaps} alt=""/> uk</li>
            </ul>
        </div>
      </div>
      </> );
}

export default Contact;