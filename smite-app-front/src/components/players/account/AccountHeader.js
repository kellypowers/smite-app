import React from 'react';
// import xbox_logo from './xbox_logo.png';

const logo = (portalid) => {
    console.log(portalid);
    switch (portalid) {
        case "10":
            return <img src={require("/Users/kellypowers/coding/react/smite-app/smite-app-front/src/images/xbox_logo.png")} alt="xbox_logo"/> 
        case "5":
            return (<img src="/Users/kellypowers/coding/react/smite-app/smite-app-front/src/images/steam_logo.png" alt="steam_logo" />)
        case "9": 
            return (<img src="/Users/kellypowers/coding/react/smite-app/smite-app-front/src/images/playstation_logo.png" alt="playstation_logo" />)
        case "22": 
            return (<img src="/Users/kellypowers/coding/react/smite-app/smite-app-front/src/images/switch_logo.png" alt="switch_logo" />)
        case "1":
            return (<img src="/Users/kellypowers/coding/react/smite-app/smite-app-front/src/images/pc_logo.png" alt="pc_logo" />)
        default:
            return <img src="/Users/kellypowers/coding/react/smite-app/smite-app-front/src/images/xbox_logo.png" alt="xbox_logo"/> 
        }
}

const AccountHeader = props => {
    console.log(props.portalid)
    return(
        <div className="account-header" key={props.player.Name}>
            <h2>{props.player.Name} </h2>
            <div className="portal-img"> 
                {logo(props.portalid)}
            </div>
            <h2>Level {props.player.Level}</h2>
        </div>
    )
}

export default AccountHeader