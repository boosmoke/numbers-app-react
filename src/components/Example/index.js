import React from 'react'
import './styles.css'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, " "];

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      win: ""
     };
  }

  shuffle(array) {
    if(!array) {
      array = numbers;
    }
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  checkIfWin = () => {
    let isWinner = false;
    numbers.sort((a, b) => {
      if(a>b) {
        if(a === numbers[numbers.length - 1]){
          isWinner =  true;
        }
      }
    });
    if(!isWinner){
       return false;
   } else {
    this.setState({win: "YOU WON! CONGRATS!!!"});
    }
  }

  moveBox = (number) => {
    let thisy = document.getElementById(number);
    let empty = document.getElementById("empty-box");

 let swap = () => {
      let texty = thisy.textContent;
      thisy.id = "empty-box";
      thisy.textContent = " ";
      empty.id = texty;
      empty.textContent = texty;
      this.checkIfWin();
    }

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
      this.checkIfWin();
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
      },
       swap());

      empty.animate([
        // keyframes
        { transform: 'translateX(0px)' }, 
        { transform: 'translateX(-270px)' }
      ], { 
        // timing options
        duration: 500,
        iterations: 1
      },
      swap());

    
    setTimeout(function(){
      let texty = thisy.textContent;
      thisy.id = "empty-box";
      thisy.textContent = " ";
      empty.id = texty;
      empty.textContent = texty;
    }, 500);
    this.checkIfWin();
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
    this.checkIfWin();
  }
  }

  componentDidMount () {
    this.shuffle(numbers);
  }

  render() {
    return(
      <div>
        <h1>Numbers Game</h1>
        <div className="container">
        <h2>{this.state.win}</h2>
        <p class="box reset" onClick={() => this.shuffle(numbers)}>RESET</p>
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
