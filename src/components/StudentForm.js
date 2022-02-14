import React, {useState} from 'react'
import HighScore from './HighScore';
import './StudentForm.css';
//import {BsAlarmFill} from 'react-icons/bs'

const StudentForm = ({questions}) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [name, setName] = useState('');
  const [scoreObtained, setScoreObtained] = useState(0);

  const giveScore = (answer,selectedAnswer) => {
    console.log(selectedAnswer);
    console.log(answer);
    if (answer===selectedAnswer) {
      setScoreObtained(scoreObtained + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const scoreboard = (
    <>
      <div className='score-display'>
              You scored {scoreObtained} out of {questions.length}
              
      </div>
      <hr />
      <HighScore name={name} newScore={scoreObtained}/>
    </>
  )

  const questionBoard = (
    <div className='questionCard'>
      <div>
        <div className='question-count'>
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div>{questions[currentQuestion].questionText}</div>
      </div><br /><div>
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
          <button className='btn' key={index} onClick={() => giveScore(
            questions[currentQuestion].answer, 
            answerOption.answerText
          )}>
            {answerOption.answerText}
          </button>
        ))}
        <br />
      </div>
    </div>
      
  )

  const inputField = (
    <div className='loginCard'>
      <h1>The Harry Potter Trivia</h1>
      <p>
        Put your wizarding knowledge to the test with our Harry Potter Quiz!
      </p>
      {/* <hr/> */}
      <form onSubmit={() => setShowInput(false)}>
        {/* <label htmlFor='name'>Enter your name: </label> */}
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter your name'></input>
        <button type='submit' className='btn'>Start Quiz</button>
      </form>
      
    </div>
  );

  let board = inputField
  if(showInput) board = inputField
  else if(showScore) board = scoreboard
  else board = questionBoard
  

  return (
    <div>
      {board}
    </div>
  )
}

export default StudentForm