import React from 'react'
import {HighScores} from '../';
import './styles.css'

class GameLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
      win: "",
      moves: 0
    };
  }

  win = () => {
    this.setState({numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "", 15]})
  }
  
  shuffle(array) {
    this.setState({win: ""})
    this.setState({moves: 0})
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
  
    this.setState({numbers: array});
  }

  checkIfWin = () => {

    let numbers = this.state.numbers;
    let empty = numbers.indexOf("");
    numbers[empty] = 16;
    for (let i = 0; i < numbers.length; i++) {
      if(i === numbers.length - 1 ) {
        let last = numbers.indexOf(16);
        numbers[last] = "";
        return true;
      }
      if (numbers[i] < numbers[i + 1]) {
      }
      else {
        let last = numbers.indexOf(16);
        numbers[last] = "";
          return false;
      }
    }
  }

  boxUpdate = (number, target, empty) => {

    this.setState({moves: this.state.moves + 1})

    setTimeout(function(){  
      const currentNumber = this.state.numbers.indexOf(number);
      const em = this.state.numbers.indexOf("");
  
      let newy = this.state.numbers;
  
      newy[currentNumber] = "";
      newy[em] = number;
      target.style = "";
      empty.style = "";
      this.setState({numbers: newy})
      if(this.checkIfWin()) {
        this.props.updateHighscore(this.state.moves)
        this.setState({win: `CONGRATS! YOU WON IN ${this.state.moves} MOVES!!`});
      }
    }.bind(this), 0);

  }

  animateBox = (target, empty, dir, bool, pixels) => {
    if(bool) {
      target.style = `transform:translate${dir}(${pixels}px);`;
      empty.style = `transform:translate${dir}(-${pixels}px);`;
    }
    else {
      target.style = `transform:translate${dir}(-${pixels}px);`;
      empty.style = `transform:translate${dir}(${pixels}px);`;
    }
  }

  moveBox = (number) => {

    let target = document.getElementById(number);
    let empty = document.getElementById("empty-box");


    let style = target.currentStyle || window.getComputedStyle(target);
    let stylee = style.marginTop.split("px");
    // MARGIN TOP AND MARGIN BOTTOM MUST BE EQUAL ON ALL BOXES!!!

    let heighty = target.offsetHeight + stylee[0] * 2;
    let widthy = target.offsetWidth + stylee[0] * 2;
    
    let em = this.state.numbers.indexOf("");
    let currentNumber = this.state.numbers.indexOf(number);

    if (em - 4 === currentNumber)
    {
      this.animateBox(target, empty, "Y", true, heighty);
      this.boxUpdate(number, target, empty);
    }

    if (em + 4 === currentNumber)
    {
      this.animateBox(target, empty, "Y", false, heighty);
      this.boxUpdate(number, target, empty);
    }

    if (em - 1 === currentNumber)
    {
      this.animateBox(target, empty, "X", true, widthy);
      this.boxUpdate(number, target, empty);
    }

    if (em + 1 === currentNumber)
    {
      this.animateBox(target, empty, "X", false, widthy);
      this.boxUpdate(number, target, empty);
    }
  }

  componentDidMount () {    
    
  }

  componentDidUpdate(nextProps) {
    const { gameNumbers } = this.props
    if (nextProps.gameNumbers !== gameNumbers) {
      if (gameNumbers) {
        this.shuffle(gameNumbers);
      }
    }
  }
  render() {
    return(
      <div>
        <h1>Numbers Game</h1>
        <div className="container">
          {this.state.win !== '' && 
          <div>
            <h2>{this.state.win}</h2>
            <button className="newGameBtn" onClick={()=> {this.shuffle(this.state.numbers)}}>NEW GAME</button>
          </div>
          }
          {this.props.highScore.length > 0 && <HighScores highScores = {this.props.highScore}/>}
          <div className="gameContainer">
          <div className="top">
            <button id="reset" onClick={() => this.shuffle(this.state.numbers)}>Reset</button>
            <h4 className="moves">Moves: {this.state.moves}</h4>
            <button id="cheat" onClick={() => this.win(this.state.numbers)}>Cheat</button>
          </div>
          <div className="row">
            {this.state.numbers.map((number, index) => {   
              return (Number.isInteger(number) ? <div key={index} onClick={() => this.moveBox(number)} id={number} className="box">{number}</div> : <div key={index} id="empty-box" className="box">{number}</div>)
            })}
          </div>
          </div>
        </div>
      </div>
    )
  }

}

export default GameLogic
