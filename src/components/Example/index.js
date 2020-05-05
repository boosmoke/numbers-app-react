import React from 'react'
import './styles.css'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""];

const Example = ({}) =>
    <div>
      <h1>Numbers Game</h1>
      <div className="container">
        <div className="row">
        {numbers.map((number) => {   
           return (<div className="box">{number}</div>) 
        })}
        </div>
      </div>
    </div>;

export default Example
