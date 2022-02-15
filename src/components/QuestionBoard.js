import React, {useState} from 'react'
import {BsAlarmFill} from 'react-icons/bs'


function QuestionBoard(props) {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scoreObtained, setScoreObtained] = useState(0);
  
  if(props.time==0) {
    props.showBoard(scoreObtained)
  }

  const giveScore = (answer,selectedAnswer) => {
    // console.log(selectedAnswer);
    // console.log(answer);
    let score = scoreObtained;
    if (answer===selectedAnswer) {
      setScoreObtained(scoreObtained + 1);
      score+=1;
      // console.log('Score', scoreObtained);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < props.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      props.showBoard(score);
    }
  };

  return (
    <div className='questionCard'>
      <div className='timer'><BsAlarmFill /> <span>{props.time}</span></div>
      <div>
        <div className='question-count'>
          <span>Question {currentQuestion + 1}</span>/{props.questions.length}
        </div>
        <div>{props.questions[currentQuestion].questionText}</div>
      </div><br /><div>
        {props.questions[currentQuestion].answerOptions.map((answerOption, index) => (
          <button className='btn' key={index} onClick={() => giveScore(
            props.questions[currentQuestion].answer, 
            answerOption.answerText
          )}>
            {answerOption.answerText}
          </button>
        ))}
        <br />
      </div>
    </div>
  )
}

export default QuestionBoard