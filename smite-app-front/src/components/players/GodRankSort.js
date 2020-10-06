import React, { Component } from 'react'

class GodRankSort extends Component {
 
    renderSearchFilter = () => {
        return (
            <select onChange={event => this.props.handleOnChange(event)} name="sort" >
                <option value="Worshippers">Worshipers </option>
                <option value="Rank">Rank</option>
                <option value="Wins">Wins</option>
                <option value="TotalGames">Total Games</option>
                <option value="Kills">Kills</option>
                <option value="Deaths">Deaths</option>
                <option value="WinRate">WinRate</option>
                {/* <option value="">Kills</option> */}
                {/* <option value="Deaths">Deaths</option> */}
            </select>
        )
    }
    render() {
        return (
            <div>
                <label>Sort By: </label>
                <input type="text" name="selector"onChange={e => this.props.handleOnChangeDescription(e)}></input>
                {this.renderSearchFilter()}
            </div>
        )
    }
}

export default GodRankSort