import div from '../../Assets/div.png'
import logo from '../../Assets/idk.png'
import './final-score.css'
import imgback from '../images/backbtn.svg'
import {Link} from "react-router-dom";
import Navbar from '../navbar/navbar';

function FinalScore() {
    return (  <>
    <Navbar/>
    <div className="Final__main">
        <div className="Final__logo">
<img src={logo} alt="" />
        </div>
        <div className="Final__content">
            <h5 className='Font_Lato'>“Your individualised tailored feedback, coming soon!”</h5>
        </div>
        <div className="Final__links">
            <img src={div} alt="" />
            <img src={div} alt="" />
            <img src={div} alt="" />
        </div>
    </div>
    <div className='Final_btn'>
     <Link to="/get_started"><img src={imgback} alt="no img" /></Link>
    </div>
    
    </>);
}

export default FinalScore;