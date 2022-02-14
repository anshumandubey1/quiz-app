import React, {useState, useEffect} from 'react'

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
    
    return scores.sort((a,b) =>  b.score-a.score);
  }
    
  );

  useEffect(() => {
    localStorage.setItem('highscores', JSON.stringify(scores));
  }, [scores]);
  console.log(scores);

  const showScore = scores.map((score)=>
    (<tr key={score.name}>
      <td>
        {score.name}
      </td>
      <td>
        {score.score}
      </td>
    </tr>));
  return (
    <div>
      <h1>Top performers</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
        {showScore}
      </table>
    </div>
  )
}

export default HighScore