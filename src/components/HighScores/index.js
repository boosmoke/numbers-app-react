import React from 'react'
import './styles.css'

const HighScores = ({highScores}) =>
  <div className="highScore">
    <h4>High Scores</h4>
    <div>
      {highScores.map((score, index)=> <div key={index} className="score">{score}</div>)}
    </div>
  </div>;

export default HighScores
