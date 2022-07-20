import React,{useState} from "react";
import {v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import imgsubmit from '../../images/submit.svg'

import '../../final_questions.css';
import '../../Quiz_questions.css'
import imgBack from './backbtn.svg';

import AnginaQuestionList from './migraineQuestionList'

let index=0;
const MigraineMainQuestions = () => {
 
  const [currentQuestion , setCurrentQuestions]=useState(0);
  const [score,setscore]=useState(0);
  const [clicked,setClicked]=useState(false);
  const[showScore, setShowScore]=useState(false);
  const[questionAnswer , setQuestions]=useState([]);
  const[pulseCheck, setPulseCheck]=useState("");
  const[ecg, setEcg]=useState("");
  const[pressure, setPressure]=useState("");
  const[serum, setSerum]=useState("");
  const[quiz ,setQuiz]=useState(false);
  
 
  const handleCorrectAnswer=(isCorrect)=>{
      if(isCorrect){
          setscore(score+1);
          setQuestions[index]=true;
          index++;
      }else
      {
        setQuestions[index]=false;
        index++;
      }
      setClicked(true);
  }
  const handleNextQuestion=()=>{
    setClicked(false);
      if(currentQuestion<AnginaQuestionList.length-1){

          setCurrentQuestions(currentQuestion+1);
      }else{
          setShowScore(true);
      }
      setClicked(false);
  }
 
const handleQuiz=()=>{
    setQuiz(true);
}

  return (
    <>     <div className='Radio__main'>
    <div className="Radio__content">
        {quiz ?<div className="Radio__mcqs">
            <h5>Please select what you think the most appropriate investigations would be with regards to Julia Winter</h5> 
            <div className='left'> <div>
            { pulseCheck=="pulse"? <label ><input type="radio" checked disabled />U&E’s</label>:<label ><input type="radio" disabled  />U&E’s</label> }
        <div>{ ecg=="ecg"? <label ><input type="radio" checked disabled />Symptom history</label>:<label ><input type="radio" disabled  />Symptom history</label> }</div>
        <div>{ pressure=="pressure"? <label ><input type="radio" checked disabled />FBC</label>:<label ><input type="radio" disabled  />FBC</label> }</div>
        <div>{ serum=="serum"? <label ><input type="radio" checked disabled />Cranial nerve exam</label>:<label ><input type="radio" disabled  />Cranial nerve exam</label> }</div>
         </div></div></div> :  <div className="Radio__mcqs">
            <h5>Please select what you think the most appropriate investigations would be with regards to Julia Winter</h5>
            
            <div className='Radio__mcqs_div'>
                <div className='mcqs__col'>
               
                <label ><input type="radio"  />Chest Xray</label>
                <label ><input type="radio" value="pressure"onChange={(e)=>setPressure(e.target.value)}   /> FBC</label>
                <label ><input type="radio"  />U&E’s</label>
                <label ><input type="radio"  />Headache</label>
                <label ><input type="radio" value="pulse" onChange={(e)=>setPulseCheck(e.target.value)} />U&E’s </label>
                </div>
                <div className='mcqs__col'>
                <label ><input type="radio" value="ecg"  onChange={(e)=>setEcg(e.target.value)}  />Symptom history</label>
                <label ><input type="radio"  />Chest Pain</label>
                <label ><input type="radio" value="serum" onChange={(e)=>setSerum(e.target.value)}  />Cranial nerve exam</label>
                <label ><input type="radio"  />Asthma</label>
                <label ><input type="radio"  />X-ray</label>

                </div>



            </div>
            <div className='mcqs__btn'><button onClick={handleQuiz}>Submit Answer</button></div>
  </div>}

   <div className="Radio__QA">
   <div className="button-toolbar">
      
      <div className="Radio__question">
      <div>
    {showScore ?(
        <div>
      <h5 className="Right_questions-header">Yours Score {score}/{AnginaQuestionList.length}</h5>
      <div className="correct-answer">Q1. Subarachnoid haemorrhage is the correct answer </div>
      <div className="correct-answer">Q2. Topiramate is correct answer </div>
      <div className="correct-answer"> Q3. Tension type headache is correct answer </div>
      <div className="correct-answer"> Q4. A woman over 40 with a 1st time migraine And New headache in a child under the age of 10 is correct answer </div> 
      <div className="correct-answer"> Q5. Raised intracranial pressure is correct answer </div>
      {/* {questionAnswer[0]=== true ? <div className="correct-answer">Q1. Chronic stable angina is the correct answer because sjkdhsjkfjdhsgfsjhg</div> : <div className="wrong-answer">Q1. Chronic stable angina is the correct answer because sjkdhsjkfjdhsgfsjhg</div> }
      {questionAnswer[1]=== true ?  <div className="correct-answer">Q2. Calcium channel blocker or beta blocker because skdfjsdklhssfjkfhkjsd</div>:<div className="wrong-answer">Q2. Calcium channel blocker or beta blocker because skdfjsdklhssfjkfhkjsd</div>}
      {questionAnswer[2]=== true ? <div className="correct-answer"> Q3. Nicorandil is correct answer </div>:<div className="wrong-answer"> Q3. Nicorandil is correct answer </div>}
      {questionAnswer[3]=== true ? <div className="correct-answer"> Q4. Unstable angina is correct answer </div> : <div className="wrong-answer"> Q4. Unstable angina is correct answer </div>}
      {questionAnswer[4]=== true ? <div className="correct-answer"> Q5. true is correct answer </div>:<div className="wrong-answer"> Q5. true is correct answer  </div>} */}
          <div><Link className="imgsubmit" to="/finalscore">Submit<img src={imgsubmit} alt="no img" /></Link></div>

      
 
</div>
    ) :  <div><div>
        <h5 className="Right_questions-header">    Question {currentQuestion + 1} of {AnginaQuestionList.length}</h5>

</div>
<div className="Right_questions" >
    {AnginaQuestionList[currentQuestion].question}
</div>

<div>
    {AnginaQuestionList[currentQuestion].answerList.map((answeroption)=>(
        <li className="radio_options" key={uuidv4}>
       <div>
            <button className={`answer-button ${clicked && answeroption.isCorrect ? "correct": "" }`}
            onClick={()=>handleCorrectAnswer(answeroption.isCorrect)}>
            <div className="radio_button"></div>
            {answeroption.answer}</button>
            </div>
        </li>
    ))}
</div>

<div  ><button className="Right_questions-nextbtn" onClick={handleNextQuestion}>Next  <img src={imgBack} alt="no img" /></button></div>
</div> }
 </div>

        
      </div>
   
    </div>
    </div>
    </div>
    </div>

    </>
  );
};

export default MigraineMainQuestions;
