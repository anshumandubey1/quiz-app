import React from 'react'

const HighScore = ({scores}) => {
  const showScore = scores.map((score)=>
    // eslint-disable-next-line react/jsx-key
    (<><tr><td>{score.name}</td><td>{score.score}</td></tr></>));
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