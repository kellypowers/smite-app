import React from 'react'



const GodRankSort = (props) => {
        return (
            <div>
                <label>Sort By: </label>
                <select onChange={event => props.handleOnChange(event)} name="sort" >
                    <option value="Worshippers">Worshipers </option>
                    <option value="Rank">Rank</option>
                    <option value="Wins">Wins</option>
                    <option value="TotalGames">Total Games</option>
                    <option value="Kills">Kills</option>
                    <option value="Deaths">Deaths</option>
                    <option value="WinRate">WinRate</option>
                </select>
            </div>
        )
    // }
}

export default GodRankSort