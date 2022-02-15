import React, {useState} from 'react'
import HighScore from './HighScore';
import './StudentForm.css';
import QuestionBoard from './QuestionBoard';

const StudentForm = ({questions}) => {

  const [showScore, setShowScore] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [scoreObtained, setScoreObtained] = useState(0);
  const [name, setName] = useState('');
  const timeLimit = 60;
  const [time, setTime] = useState(timeLimit);
  const [intervalId, setIntervalId] = useState();
  let count = timeLimit;
  const startTimer = () => {
    let interval = setInterval(() => {
      setTime(count-1);
      count -= 1;
      // console.log(Date.now(), time)
    }, 1000);
    setIntervalId(interval);
  }

  const showBoard = (score) => {
    clearInterval(intervalId);
    setScoreObtained(score)
    setShowScore(true);
  }

  const formSubmitted = () => {
    setShowInput(false);
    startTimer();
  }

  if(showInput) {
    return (
      <div className='loginCard'>
        <h1>The Harry Potter Trivia</h1>
        <p>
          Put your wizarding knowledge to the test with our Harry Potter Quiz!
        </p>
        <form onSubmit={formSubmitted}>
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter your name' required></input>
          <button type='submit' className='btn'>Start Quiz</button>
        </form>
        
      </div>
    );
  } else if (showScore) {
    return (
      <div>
        <HighScore 
          name={name} 
          newScore={scoreObtained} 
          questionsLength={questions.length} 
          timeTaken={timeLimit - time}
        />
      </div>
    )
  } else {
    return (
      <div>
        <QuestionBoard
          questions={questions} 
          time={time} 
          showBoard={showBoard}
        />
      </div>
    )
  }
}

export default StudentForm