import React from 'react'
import './styles.css'

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""],
      win: "",
      moves: 0
     };
  }

  win = () => {
    this.setState({numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "", 15]})
  }
  
  shuffle(array) {

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

    let checky = this.state.numbers;
    let empty = checky.indexOf("");
    checky[empty] = 16;
    for (let i = 0; i < checky.length; i++) {
      if(i === checky.length - 1 ) {
        let sixteen = checky.indexOf(16);
        checky[sixteen] = "";
        return true;
      }
      if (checky[i] < checky[i + 1]) {
      }
      else {
        let sixteen = checky.indexOf(16);
        checky[sixteen] = "";
          return false;
      }
    }
  }

  boxUpdate = (number) => {

    this.setState({moves: this.state.moves + 1})

    setTimeout(function(){  
      const numy = this.state.numbers.indexOf(number);
      const em = this.state.numbers.indexOf("");
  
      let newy = this.state.numbers;
  
      newy[numy] = "";
      newy[em] = number;
  
      this.setState({numbers: newy})
      if(this.checkIfWin()) {
        this.setState({win: `CONGRATS! YOU WON in ${this.state.moves} moves!!`});
      }
    }.bind(this), 500);

  }

  animateBox = (thisy, empty, dir, bool, pixels) => {

    if(bool) {

      thisy.animate([
        // keyframes
        { transform: `translate${dir}(0px)` }, 
        { transform: `translate${dir}(${pixels}px)` }
      ], { 
        // timing options
        duration: 500,
        iterations: 1,
        endDelay: 100
      });

      empty.animate([
        // keyframes
        { transform: `translate${dir}(0px)` }, 
        { transform: `translate${dir}(-${pixels}px)` }
      ], { 
        // timing options
        duration: 500,
        iterations: 1,
        endDelay: 100
      });
    }

    else {

      thisy.animate([
        // keyframes
        { transform: `translate${dir}(0px)` }, 
        { transform: `translate${dir}(-${pixels}px)` }
      ], { 
        // timing options
        duration: 500,
        iterations: 1,
        endDelay: 100
      });

      empty.animate([
        // keyframes
        { transform: `translate${dir}(0px)` }, 
        { transform: `translate${dir}(${pixels}px)` }
      ], { 
        // timing options
        duration: 500,
        iterations: 1,
        endDelay: 100
      });

    }
  }

  moveBox = (number) => {

    let thisy = document.getElementById(number);
    let empty = document.getElementById("empty-box");


    let style = thisy.currentStyle || window.getComputedStyle(thisy);
    let stylee = style.marginTop.split("px");
    // MARGIN TOP AND MARGIN BOTTOM MUST BE EQUAL ON ALL BOXES!!!

    let heighty = thisy.offsetHeight + stylee[0] * 2;
    let widthy = thisy.offsetWidth + stylee[0] * 2;
    
    let em = this.state.numbers.indexOf("");
    let numy = this.state.numbers.indexOf(number);

    if (em - 4 === numy)
    {
      this.animateBox(thisy, empty, "Y", true, heighty);
      this.boxUpdate(number);
    }

    if (em + 4 === numy)
    {
      this.animateBox(thisy, empty, "Y", false, heighty);
      this.boxUpdate(number);
    }

    if (em - 1 === numy)
    {
      this.animateBox(thisy, empty, "X", true, widthy);
      this.boxUpdate(number);
    }

    if (em + 1 === numy)
    {
      this.animateBox(thisy, empty, "X", false, widthy);
      this.boxUpdate(number);
    }
  }

  componentDidMount () {
    this.shuffle(this.state.numbers);
  }
  render() {
    return(
      <div>
        <h1>Numbers Game</h1>
        <div className="container">
          <h2>{this.state.win}</h2>
          <div class="top">
          <h4>Moves: {this.state.moves}</h4>
          <button onClick={() => this.shuffle(this.state.numbers)}>RESET</button>
          </div>
          <button id="cheat" onClick={() => this.win(this.state.numbers)}>Cheat</button>
          <div className="row">
            {this.state.numbers.map((number) => {   
              return (Number.isInteger(number) ? <div onClick={() => this.moveBox(number)} id={number} className="box">{number}</div> : <div id="empty-box" className="box">{number}</div>)
            })}
          </div>
        </div>
      </div>
    )
  }

}

export default Example
