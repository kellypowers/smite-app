import React, { Component } from 'react'
import Gods from '../components/gods/Gods'
import { connect } from 'react-redux'

class GodsContainer extends Component {
  
  render() {
      console.log(this.props)
    return (
      <div>
        <Gods players={this.props.gods} deleteGod={this.props.deleteGod}/>
      </div>
    )
  }
}


// const mapStateToProps = state => ({ })

const mapDispatchToProps = dispatch => {
    // const player= (player_name, portal_id)
  return {
    addGod: god => dispatch({type: "ADD_GOD", god}),
    deleteGod: god_id => dispatch({type: "DELETE_GOD", god_id})
  }
}

export default connect(null, mapDispatchToProps)(GodsContainer)
