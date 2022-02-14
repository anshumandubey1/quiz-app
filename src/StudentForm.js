import React, {useState} from 'react'
import HighScore from './HighScore';

const StudentForm = ({questions,scores}) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
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

  
  return (
    <div>
      {showScore ? (
        <>
          <div>
                  You scored {scoreObtained} out of {questions.length}
                  
          </div>
          <HighScore scores={scores}/>
        </>
      ) : (
        <>
          <div >
            <div >
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div >{questions[currentQuestion].questionText}</div>
          </div>
          <br />
          <div >
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              // eslint-disable-next-line react/jsx-key
              <button onClick={() => giveScore(questions[currentQuestion].answer,answerOption.answerText)}>{answerOption.answerText}</button>
            ))}
            <br />
          </div>
        </>
      )}
    </div>
  )
}

export default StudentForm