import React, { Component } from 'react'

export default class GameLogic extends Component {

  numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  shuffle(array) {
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

  checkIfWin = () =>{
    let isWinner = false;
    this.numbers.sort((a, b) => {
      if(a>b) {
        if(a === this.numbers[this.numbers.length - 1]){
          isWinner =  true;
        }
      }
    });
    if(!isWinner) return false
    return true;
  }

  componentDidMount () {
    this.props.updateNumbers(this.numbers);
    //console.log(this.shuffle(this.numbers))
  }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
