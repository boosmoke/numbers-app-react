import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import * as gameActions from '../../actions/numberGameActions'
import {connect} from 'react-redux'
import { GameLogic} from '../../components'

class Home extends Component {
  componentDidMount() {
    this.props.actions.updateNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""])
  }

  render() {
    const  {actions, numbers, highScore} = this.props;
    return (
      <div className="home">
        <GameLogic updateHighscore = {actions.updateHighscore} updateNumbers={actions.updateNumbers} highScore={highScore} gameNumbers={numbers}/>
      </div>
    )
  }
}

export default connect(
  state => ({
    numbers: state.numbersGameReducer.numbers,
    highScore: state.numbersGameReducer.highScore.sort((a,b) => a-b)
  }),
  dispatch => ({
    actions: bindActionCreators(gameActions, dispatch)
  })
)(Home)
