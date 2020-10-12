import React, { Component } from 'react'
import Gods from '../components/gods/Gods'
import GodsSearch from '../components/gods/GodsSearch'
import GodsFilter from '../components/gods/GodsFilter'
import { connect } from 'react-redux'
import NavBar from '../components/navigation/NavBar'

const roles = ["All", " Warrior", " Guardian", " Mage"," Hunter"," Assassin"]
const pantheons = ["All", "Great Old Ones", "Greek", "Hindu", "Mayan", "Egyptian", "Japanese", "Slavic", "Celtic", "Roman", "Voodoo", "Chinese", "Norse", "Arthurian", "Polynesian", "Yoruba"]

class GodsContainer extends Component {
  state = {
      // selectedOption: "role",
      name: "",
      role: roles[0],
      pantheon: pantheons[0]
    }
  
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  clearFilters= () => {
    this.setState({
      name: "",
      role: roles[0],
      pantheon: pantheons[0]
    })
  }

  render() {
    return (
      <div className="gods-container">
        <NavBar/>
        <br/>
        <div className="gods-search-components">
        <GodsSearch name={this.state.name} handleOnChange={this.handleOnChange} />
        <GodsFilter 
          selectedOption={this.state.selectedOption} 
          role={this.state.role} pantheon={this.state.pantheon} 
          handleOnChange={this.handleOnChange}
          option={roles}
          eventName="role"
          />
          <GodsFilter 
          selectedOption={this.state.selectedOption} 
          role={this.state.role} pantheon={this.state.pantheon} 
          handleOnChange={this.handleOnChange}
          option={pantheons}
          eventName="pantheon"
          />
          </div>
        {/* <button onClick={()=> this.clearFilters()}>Clear Filters</button> */}
        <Gods gods={this.props.gods.gods} name={this.state.name} role={this.state.role} pantheon={this.state.pantheon} />
        {/* </div> */}
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
