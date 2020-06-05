import React, { Component } from 'react'
import Gods from '../components/gods/Gods'
import { connect } from 'react-redux'

class GodsContainer extends Component {
    state = {
        gods: []
      }

    componentDidMount() {
        fetch('http://localhost:3000/gods')
          .then(response => response.json())
          .then(data => {
              console.log(data)
            this.setState({
                
              gods: data
            })
            console.log(this.state.gods)
          })
      }
  render() {
      console.log(this.state)
    return (
      <div>
        <Gods gods={this.state.gods} /> 
        {/* //deleteGod={this.props.deleteGod}/> */}
      </div>
    )
  }
}


const mapStateToProps = state =>  {
    return { gods: state.gods }
}
// const mapDispatchToProps = dispatch => {
//     // const player= (player_name, portal_id)
//   return {
//     addGod: god => dispatch({type: "ADD_GOD", god}),
//     deleteGod: god_id => dispatch({type: "DELETE_GOD", god_id})
//   }
// }

// export default connect(null, mapDispatchToProps)(GodsContainer)
export default connect(mapStateToProps)(GodsContainer)
// export default (GodsContainer)