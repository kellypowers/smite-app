import React, { Component } from 'react'
import Gods from '../components/gods/Gods'
import GodsSearch from '../components/gods/GodsSearch'
import GodsFilter from '../components/gods/GodsFilter'
import { connect } from 'react-redux'
import NavBar from '../components/navigation/NavBar'


class GodsContainer extends Component {
  state = {
      selectedOption: "roles",
      name: "",
      role: "",
      pantheon: ""
    }
  
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clearFilters= () => {
    this.setState({
      name: "",
      role: "",
      pantheon: ""
    })
  }

  render() {
    return (
      <div className="gods-container">
        <NavBar/>
        <br/>
        <GodsSearch name={this.state.name} handleOnChange={this.handleOnChange} />
        <GodsFilter selectedOption={this.state.selectedOption} role={this.state.role} pantheon={this.state.pantheon} handleOnChange={this.handleOnChange}/>
        <button onClick={()=> this.clearFilters()}>Clear Filters</button>
        <Gods gods={this.props.gods.gods} name={this.state.name} role={this.state.role} pantheon={this.state.pantheon} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    gods: state.gods,
    items: state.items,
    loading: state.loading
  }
}


export default connect(mapStateToProps)(GodsContainer)
