import React from 'react'
import './styles.css'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, " "];

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
     };
  }

  moveBox = (number) => {
    let thisy = document.getElementById(number);
    let empty = document.getElementById("empty-box");

    /*
    console.log("THIS LEFT", thisy.offsetLeft);
    console.log("THIS TOP", thisy.offsetTop);
    console.log("EMPTY LEFT", empty.offsetLeft);
    console.log("EMPTY TOP", empty.offsetTop);
    */

    if (thisy.offsetLeft === empty.offsetLeft && thisy.offsetTop === empty.offsetTop - 174)
    {
        thisy.animate([
          // keyframes
          { transform: 'translateY(0px)' }, 
          { transform: 'translateY(174px)' }
        ], { 
          // timing options
          duration: 500,
          iterations: 1
        });

        empty.animate([
          // keyframes
          { transform: 'translateY(0px)' }, 
          { transform: 'translateY(-174px)' }
        ], { 
          // timing options
          duration: 500,
          iterations: 1
        });

        setTimeout(function(){
          let texty = thisy.textContent;
          thisy.id = "empty-box";
          thisy.textContent = " ";
          empty.id = texty;
          empty.textContent = texty;
      }, 500);
    }

    if (thisy.offsetLeft === empty.offsetLeft && thisy.offsetTop === empty.offsetTop + 174)
    {
        thisy.animate([
          // keyframes
          { transform: 'translateY(0px)' }, 
          { transform: 'translateY(-174px)' }
        ], { 
          // timing options
          duration: 500,
          iterations: 1
        });

        empty.animate([
          // keyframes
          { transform: 'translateY(0px)' }, 
          { transform: 'translateY(174px)' }
        ], { 
          // timing options
          duration: 500,
          iterations: 1
        });

        setTimeout(function(){
          let texty = thisy.textContent;
          thisy.id = "empty-box";
          thisy.textContent = " ";
          empty.id = texty;
          empty.textContent = texty;
      }, 500);
    }

    if (thisy.offsetTop === empty.offsetTop && thisy.offsetLeft === (empty.offsetLeft - 270))
    {
      thisy.animate([
        // keyframes
        { transform: 'translateX(0px)' }, 
        { transform: 'translateX(270px)' }
      ], { 
        // timing options
        duration: 500,
        iterations: 1
      });

      empty.animate([
        // keyframes
        { transform: 'translateX(0px)' }, 
        { transform: 'translateX(-270px)' }
      ], { 
        // timing options
        duration: 500,
        iterations: 1
      });

    
    setTimeout(function(){
      let texty = thisy.textContent;
      thisy.id = "empty-box";
      thisy.textContent = " ";
      empty.id = texty;
      empty.textContent = texty;
    }, 500);
    }

    if (thisy.offsetTop === empty.offsetTop && thisy.offsetLeft === (empty.offsetLeft + 270))
    {
      thisy.animate([
        // keyframes
        { transform: 'translateX(0px)' }, 
        { transform: 'translateX(-270px)' }
      ], { 
        // timing options
        duration: 500,
        iterations: 1
      });

      empty.animate([
        // keyframes
        { transform: 'translateX(0px)' }, 
        { transform: 'translateX(270px)' }
      ], { 
        // timing options
        duration: 500,
        iterations: 1
      });

    
    setTimeout(function(){
      let texty = thisy.textContent;
      thisy.id = "empty-box";
      thisy.textContent = " ";
      empty.id = texty;
      empty.textContent = texty;
    }, 500);
    }
  }
  render() {
    return(
      <div>
        <h1>Numbers Game</h1>
        <div className="container">
          <div className="row">
            {numbers.map((number) => {   
              return (Number.isInteger(number) ? <div onClick={() => this.moveBox(number)} id={number} className="box">{number}</div> : <div id="empty-box" className="box">{number}</div>)
            })}
          </div>
        </div>
      </div>
    )
  }

}

export default Example
