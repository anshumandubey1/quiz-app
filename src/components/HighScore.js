import React, {useState, useEffect} from 'react';
import './HighScore.css';

const HighScore = (props) => {
  const [scores] = useState(() => {
    const scores = JSON.parse(localStorage.getItem('highscores')) || [];
    let found = false;
    for(let i = 0; i < scores.length; i++) {
      if(scores[i].name === props.name) {
        if(scores[i].score<props.newScore){
          scores[i].score = props.newScore;
          scores[i].time = props.timeTaken;
        } else if (
          scores[i].score==props.newScore &&
          scores[i].time>props.timeTaken
        ) {
          scores[i].score = props.newScore;
          scores[i].time = props.timeTaken;
        }
        found = true;
      }
    }
    if (!found) {
      scores.push({
        name: props.name,
        score: props.newScore,
        time: props.timeTaken
      });
    }
    
    return scores.sort((a,b) => {
      if(a.score==b.score) {
        return a.time - b.time;
      }
      return b.score - a.score;
    }).slice(0,5);
  }
    
  );

  useEffect(() => {
    localStorage.setItem('highscores', JSON.stringify(scores));
  }, [scores]);
  // console.log(scores);

  const showScore = scores.map((score,index)=>
    (<tr key={score.name}>
      <td>
        {index+1}
      </td>
      <td>
        {score.name}
      </td>
      <td>
        {score.score}
      </td>
      <td>
        {score.time}
      </td>
    </tr>));
  return (
    <div>
      <div className='score-display'>
          You scored {props.newScore} out of {props.questionsLength} in {props.timeTaken} seconds.
              
      </div>
      <hr />
      <h1>Leaderboard</h1>
      <table className='leaderboard-results'>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {showScore}
        </tbody>
      </table>
    </div>
  )
}

export default HighScore