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
          found = true;
        }
      }
    }
    if (!found) {
      scores.push({
        name: props.name,
        score: props.newScore,
      });
    }
    
    return scores.sort((a,b) =>  b.score-a.score).slice(0,5);
  }
    
  );

  useEffect(() => {
    localStorage.setItem('highscores', JSON.stringify(scores));
  }, [scores]);
  console.log(scores);

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
    </tr>));
  return (
    <div>
      <h1>Leaderboard</h1>
      <table className='leaderboard-results'>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
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