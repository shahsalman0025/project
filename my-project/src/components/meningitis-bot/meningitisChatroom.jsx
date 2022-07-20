import Chatbot from 'react-chatbot-kit';
import Modal from 'react-modal';
import React from 'react';
import MeningitisKeywards from './meningitis-keywards.js';
import Meningitisconfig from './meningitis-config.js';
import MeningitisAnswers from './meningitis-answers.js';


// import logo from '../Assets/idk.png';
import '../bot.css'
import '../chatroom.css';
import '../modal.css';


import {Link} from "react-router-dom";

function MeningitisChatRoom() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    function openModal() {
      setIsOpen(true);
    }
    
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
    
    function closeModal() {
      setIsOpen(false);
    }
    const customStyles = {
      overlay: {
        position: 'fixed',
        top:'0px',
        left:'0px',
        zIndex: 2,
        
      },
      content: {
        position: 'fixed',
        top:'0px',
        left:'0px',
        textalign:'center',
        position: 'fixed',
        color:'white',
        overflow:'hidden',
        outline: 'none',
        border:'0px',
        padding:'0px',
      },
      };
    return (
    <><div class="chatroom">
    <div class="left">
       <div class="headerc">
        <div class="logo1">
            <Link to="/"><img src='logo' alt=""/></Link>
            </div>
            <div class="links">
                <div class="text"><h6><strong>Chat to</strong></h6><h6>name</h6></div>
                <div class="link_btns">
                    <button class="bg-blue">Allments</button>
                    <button class="bg-blue">Medication Review</button>
                    <button class="bg-blue">Pom-P</button>
                </div>
            </div>
       </div>
       <div className='bot_area'>
       <Chatbot
        config={Meningitisconfig}
        messageParser={MeningitisKeywards}
        actionProvider={MeningitisAnswers}
        bubbleStyle={{ fontSize: '5px' }}
        enableSmoothScroll={true}
      />
    </div>
    </div>
    <div class="right">
      <button class="btn-logout">
        Logout
      </button>
        <div  class="img">
            <img src="/Assets/chat_img.png" alt=""/>
            <h4>name</h4>
            <h5>Lorem, ipsum dolor.</h5>
        </div>
        <button class="bg-skyblue" onClick={openModal}>Stuck?</button>
        <br/>
        <button>View Rx</button>
        <div class="med">
            <h4>Medication List</h4>
            <span>
                bisoprolol<br/>
                atenolol <br/>
                ramipril  <br/>
                paracetamol
            </span>
            
        </div>
        
            <button class="bg-skyblue"><Link to='/meningitis_main_question'>End Consultation</Link></button>
            <br/>
            <button><Link  class="bg-skyblue" to="/ref">View Reference Range</Link></button>
            
    </div>
</div>



<Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
       
        
      >
        <div className='orbit__modal-content'>
         <div className='modal-header'>
            
        
        <button onClick={closeModal}>close</button>
        
        <div class="modal_body">
            <div class="back-btn">
                <img src="/Assets/back.svg" alt="" />
            </div>
            <div class="heading">
                <h3>Hints board</h3>
            </div>

            <div class="round sky">

                <p>
                    Think about the presenting symptoms <br />
                    Why might the patiant be experiencing breathlessness <br />
                </p>
            </div>
            <div class="round sky">

                <p>
                    Think about the presenting symptoms <br />
                    Why might the patiant be experiencing breathlessness <br /> </p>
            </div>
            <div class="round sky">

                <p>
                    Think about the presenting symptoms <br />
                    Why might the patiant be experiencing breathlessness <br /> </p>
            </div>
            <div class="round sky">

                <p>
                    Think about the presenting symptoms <br />
                    Why might the patiant be experiencing breathlessness <br /> </p>
            </div>
        </div>
        </div>
        </div>
      </Modal>
</>

    );
}

export default MeningitisChatRoom;