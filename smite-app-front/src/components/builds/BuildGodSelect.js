import React, { Component } from 'react'

class BuildGodSelect extends Component {
    render() {
        return (
            <form>
                <label >Select God Name:</label>
                <select name="god_id_smite" onChange={e => this.props.handleOnChangeDescription(e)} > 
                    <option value=""> </option> 
                    {this.props.gods.map(god => {
                        return <option key={god.god_id} value={god.god_id}>{god.name}</option>
                })}</select>
  
            </form>
        )
    }
}

export default BuildGodSelect