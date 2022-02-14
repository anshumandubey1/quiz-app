import React, {useState} from 'react'
import HighScore from './HighScore';

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
      <div>
              You scored {scoreObtained} out of {questions.length}
              
      </div>
      <HighScore name={name} newScore={scoreObtained}/>
    </>
  )

  const questionBoard = (
    <>
      <div>
        <div>
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div>{questions[currentQuestion].questionText}</div>
      </div><br /><div>
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
          <button key={index} onClick={() => giveScore(
            questions[currentQuestion].answer, 
            answerOption.answerText
          )}>
            {answerOption.answerText}
          </button>
        ))}
        <br />
      </div>
    </>
      
  )

  const inputField = (
    <div>
      <form onSubmit={() => setShowInput(false)}>
        <label htmlFor='name'>Enter your name: </label>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <button type='submit'>Submit</button>
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