import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import * as gameActions from '../../actions/numberGameActions'
import {connect} from 'react-redux'
import {Example, GameLogic} from '../../components'

class Home extends Component {
  componentDidMount() {
    //this.props.actions.numbers([1,2,3,4,5])
  }

  render() {
    const  {actions, numbers} = this.props;
    return (
      <div className="home">
        <Example/>
        <GameLogic updateNumbers={actions.updateNumbers}/>
      </div>
    )
  }
}

export default connect(
  state => ({
    numbers: state.exampleReducer.numbers
  }),
  dispatch => ({
    actions: bindActionCreators(gameActions, dispatch)
  })
)(Home)
