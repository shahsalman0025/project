import Chatbot from 'react-chatbot-kit';
import Modal from 'react-modal';
import React from 'react';
import AsthamaKeywards from './asthama-keywards.js';
import AsthamaConfig from './asthama-config.js';
import AsthamaAnswers from './asthama-answers.js';
import imguser from '../../Assets/alicejones.png';
import logo from '../../Assets/idk.png';
import refimg from '../../Assets/reference.png';


// import logo from '../Assets/idk.png';
import '../bot.css'
import '../chatroom.css';
import '../modal.css';
import Navbar from '../navbar/navbar.jsx';

import {Link} from "react-router-dom";

function AsthamaChatRoom() {
let subtitle;
const [modalIsOpen, setIsOpen] = React.useState(false);
const [modalRefOpen, setRefOpen] = React.useState(false);
const [modalRxOpen, setRxOpen] = React.useState(false);
const [modalMedOpen, setMedOpen] = React.useState(false);



function afterOpenModal() {
// references are now sync'd and can be accessed.
subtitle.style.color = '#f00';
}



const customStyles = {
overlay: {
width:'100%',
height:'100vh',
zIndex: 2,

},
content: {
position:'none',
width:'100%',
height:'100vh',
textalign:'center',
color:'white',
overflow:'hidden',
outline: 'none',
border:'0px',
padding:'0px',
background:'none',
},
};
return (
<>
<Navbar/>
  <div class="chatroom">
    <div class="left">
      <div class="headerc">
        <div class="logo1">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div class="links">
          <div class="text">
            <h5><strong>Chat to Alice Jones</strong></h5>
            
          </div>
          <div class="link_btns">
            <button class="bg-blue">Patients Bloods</button>
            <button class="bg-blue">Basic Obs</button>
         
          </div>
        </div>
      </div>
      <div className='bot_area'>
      <Chatbot
        config={AsthamaConfig}
        messageParser={AsthamaKeywards}
        actionProvider={AsthamaAnswers}
        bubbleStyle={{ fontSize: '5px' }}
        enableSmoothScroll={true}
      />

      </div>
    </div>
    <div class="right">
      {/* <button class="btn-logout">
        Logout
      </button> */}
      <div class="img">
        <img src={imguser} alt="" />
        <h4>Alice Jones</h4>
      </div>
      <button class="bg-skyblue" onClick={()=> setIsOpen(true)}>Stuck?</button>
      <br />
      <button onClick={()=>
        setRxOpen(true)}>View Rx</button>

      <button onClick={()=> setMedOpen(true)}>Medication List</button>

      <button onClick={()=>
        setRefOpen(true)}>View Reference Range</button>

      <button class="bg-skyblue">
        <Link to='/asthama_main_question'>End Consultation</Link></button>
      
      
    </div>
  </div>



  <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} style={customStyles}>
    <div className='orbit__modal-content'>
      <div className='modal-header'>


        <button onClick={ function closeModal() { setIsOpen(false); }}>close</button>

        <div class="modal_body">
          <div class="back-btn">
            <img src="/Assets/back.svg" alt="" />
          </div>
          <div class="heading">
            <h3 className='Font_Lato'>Hint board</h3>
          </div>

          <div class="round sky">

            <p>
            Have you covered ideas, concerns and expectations?
            </p>
          </div>
          <div class="round sky">

            <p>
            Have they experienced anything like this before?
              </p>
          </div>
          <div class="round sky">

            <p>
            When did it start? How did it start? <br /> How long have they had the symptoms?
             </p>
          </div>
          <div class="round sky">

            <p>
            Have you asked about red flags? What are <br /> the red flags for the respiratory system?
              </p>
          </div>
        </div>
      </div>
    </div>
  </Modal>



  <Modal isOpen={modalRefOpen} onAfterOpen={afterOpenModal} style={customStyles}>
    <div className='orbit__modal-content'>
      <div className='modal-header'>


        <button onClick={ function closeModal() { setRefOpen(false); }}>close</button>

        <div class="modal_body">
          <div class="back-btn">
            <img src="/Assets/back.svg" alt="" />
          </div>
          <div class="heading">
            <h3 className='Font_Lato'>Standard Reference Ranges</h3>
          </div>

          <div class="round bio">
            <h5>Biochemistry</h5>
            <p>Sodium 133-146 mmol/L <br />
              Potassium 3.5-5.3 mmol/L <br />
              Urea 2.5-7.8 mmol/L <br />
              Creatinine Male 64-104 micromol/L <br /> Creatinine Female 49-00 -micromol <br /> Bicarbonate
              27-29micromdlé <br />
              Calcium (corrected) 2.2011.00"mamality <br /> Magnesium 27. tó pornót é

            </p>


          </div>
          <div class="round hema">
            <h5>Hematology</h5>
            <p>Haemoglobin Male 135-175 g/l <br /> Haemoglobin Female 115-155 g/L 
            White Cell Count 4.0-11 x109/L  <br />
            Neutrophils1.8-7.5 x109/Lx 109/L <br />
            Eosinophils 0.04 -0.44 x 109/t <br />
            Serum folate 3.0-15.0 micromol/L <br />
            Serum B12 160-925 ng/L <br />
            C-Reactive Protein (CRP) 10 mg/ml

            </p>
            </div>
            <div class="round thy">
            <h5>Thyroid function tests</h5>
            <p>
            TSH 0.2-4.0 mlu/L <br />
            14 10-20pmol/L <br />
            T3 0.9-2.6 pmol/L
            </p>
        </div>
      </div>
    </div>
    </div>
  </Modal>
  <Modal isOpen={modalRxOpen} onAfterOpen={afterOpenModal} style={customStyles}>
    <div className='orbit__modal-content'>
      <div className='modal-header'>


        <button onClick={ function closeModal() { setRxOpen(false); }}>close</button>

        <div class="modal_body">
          <div class="back-btn">
            <img src="/Assets/back.svg" alt="" />
          </div>
          <div class="heading">
            <h4 className='Font_Lato'>View Prescription</h4>
          </div>

          <div class="">

            <p> <img src={refimg} alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>

  </Modal>

  <Modal isOpen={modalMedOpen} onAfterOpen={afterOpenModal} style={customStyles}>
    <div className='orbit__modal-content'>
      <div className='modal-header'>


        <button onClick={ function closeModal() { setMedOpen(false); }}>close</button>

        <div class="modal_body">
          <div class="back-btn">
            <img src="/Assets/back.svg" alt="" />
          </div>
          <div class="heading">
            <h3 className='Font_Lato'>Medication History</h3>
          </div>

          <div class="round sky">

            <p>
              bisoprol
            </p>
          </div>
          <div class="round sky">

            <p>
              atendol</p>
          </div>
          <div class="round sky">

            <p>
              rampiril</p>
          </div>
          <div class="round sky">

            <p>
              paracetamol</p>
          </div>
        </div>
      </div>
    </div>


  </Modal>

</>

);
}

export default AsthamaChatRoom;