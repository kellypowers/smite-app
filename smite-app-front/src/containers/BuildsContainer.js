import React, { Component } from 'react'
import NavBar from '../components/navigation/NavBar'
import Builds from '../components/builds/Builds'
import { connect } from 'react-redux'

class BuildsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name: "",
            description: "",
            name: "",
            god_id_smite: 0,
            selector: "",
            items: []
        }
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const build = this.state;
        this.props.postBuild(build, this.props.history);
        // this.props.history.push(`/builds/1`)
    } 

    handleOnChangeDescription = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    handleOnChange = event => {
        if (Object.values(this.props.items).find(i => i.name === event.target.value)) {
          let item = Object.values(this.props.items).find(i => i.name === event.target.value)
          this.setState({
            items: [...this.state.items, item]
          })
        }
    }

    // renderItems = () => {
    //     if (this.state.selector !== "") {
    //       let itemsSearch = (Object.values(this.props.items).filter(item => {
    //         return (item.item_stat !== undefined && item.item_stat.toLowerCase().includes(this.state.selector.toLowerCase()))}))
    //         return Object.values(itemsSearch).map(item => {
    //           console.log(item);
    //           return (<div onClick={event => this.handleOnClick(event, item)}><img src={item.item_image} alt={item.name}/> {item.name}{item.item_stat} </div>)
    //         })
    //     }
    //     else {
    //       return Object.values(this.props.items).slice(0, -1).map(item => {
    //       return (<div key={item.item_id} onClick={event => this.handleOnClick(event, item)}><img src={item.item_image} alt={item.name}/> {item.name} {item.item_stat} </div>)
    //       })
    //     } 
    //   }

    clearFilters = (event) => {
        this.setState({
          // ...this.state,
          items: []
        })
    }

    // want to be able to click the list of items to fill in the state items array, click the box and remove the item from the box/state
    handleOnClick = (event, item) => {
        if (this.state.items.length < 6 && !this.state.items.find(f => f === item)) {
            this.setState({
                // ...this.state,
                items: [...this.state.items,  item]
            })
        }
    }


    render() {
        if (this.props.builds.loading==='success') {
            return (
                <div className="builds-container">
                    <NavBar/>
                    <Builds />         
                </div>
            )
        }
    }
}


const mapStateToProps = state => {
    return {
        gods: state.gods,
        items: state.items,
        builds: state.builds,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(BuildsContainer)

