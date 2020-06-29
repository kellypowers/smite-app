import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchMatchDetails } from '../../actions/fetchMatches'
import Clan from './Clan'
import Player from './Player'
import { fetchPlayer, fetchPlayerById } from '../../actions/fetchPlayer'
import { fetchClan } from '../../actions/fetchClan'
// import Team from './Team'

 class Match extends Component {
     // maybe set state to clan name when clicked, so that the clan name can be passed intot he Clan comp? bc right now it is not in the fetched info.
   constructor(props) {
     super(props);
     this.getTeam = this.getTeam.bind(this)
   }

   componentWillMount(){
    console.log("router prosp in comp is " + JSON.stringify(this.props.routerProps))
    this.props.fetchMatchDetails(this.props.routerProps.match.params.matchid)
  }


  getTeam = (e) => {
    this.props.fetchClan(e.target.className);
  }

  getPlayerInfo = (e) => {
    this.props.fetchPlayerById(e.target.className);
    return <Redirect to="/player"/>
    // "playerName":"[CSUAL]BrettG772","playerPortalId":"10"
  }

  renderFetchedInfo = () => {
    if (this.props.clan.loading === 'success') {
      return <Redirect to="/clan"/>
    }else if (this.props.player.loading === 'success') {
      return <Redirect to="/player"/>
    } else {
      return this.renderMatchInfo()
    }
  }

  renderMatchInfo = () => {
    let win_array = [];
    let lose_array = [];
    Object.values(this.props.match).map(t => {
      if (t.Win_Status === "Winner"){ 
        win_array.push(t)} else{ lose_array.push(t)}
      }) ;
      // console.log("winarray is " + JSON.stringify(win_array))
      return (
      <div className="match-container">
        <p>Match Game: {win_array[0].Map_Game}</p>
        <p>Minutes: {win_array[0].Minutes}</p>
        <div className="match-teams-container">
          <h3>Losing Team:</h3>
          {this.renderPlayerInfo(lose_array)}
          <h3>Winning Team:</h3>
          {this.renderPlayerInfo(win_array)}
        </div>
      </div>
      )
  }

  renderPlayerInfo = (array) => {
    console.log("array is " + JSON.stringify(array));
    return (
      <table className="player">
        <tr>
        <th>Player</th>
        <th>Account Level:</th>
        <th>Mastery Level:</th>
        <th>Player Damage:</th>
        <th>Bot Damage:</th>
        <th>Basic Attack Damage:</th>
        <th>Physical Damage:</th>
        <th>Magical Damage:</th>
        <th>Damage Mitigated:</th>
        <th>Final Level:</th>
        <th>God Played:</th>
        <th>Gold Earned</th>
        <th>Player Healing:</th>
        <th>Item 1:</th>
        <th>Deaths:</th>
        <th>Kills:</th>
        <th>Assists</th>
        <th>Team Name:</th>
      </tr>
      {array.map(i=> {
        console.log(this.props.routerProps.match.params.playername);
        return (
        <tr className="player">
          <td> {i.playerName ? <Link to={`/players/find/${i.playerPortalId}/${i.playerName.split(']')[1]}`} replace>{i.playerName}</Link> : "hidden"}</td>
          <td> {i.Account_Level}</td>
          <td> {i.Mastery_Level}</td>
          <td> {i.Damage_Player}</td>
          <td> {i.Damage_Bot}</td>
          <td> {i.Damage_Done_In_Hand}</td>
          <td> {i.Damage_Done_Physical}</td>
          <td>{i.Damage_Done_Magical}</td>
          <td>{i.Damage_Mitigated}</td>
          <td> {i.Final_Match_Level}</td>
          <td> <Link to={`/gods/${i.GodId}`}>{i.Reference_Name}</Link></td>
          <td> {i.Gold_Earned}</td>
          <td> {i.Healing}</td>
          <td><Link to={`/items/${i.ItemId1}`}>{i.Item_Purch_1}</Link></td>
          <td>{i.Deaths}</td>
          <td> {i.Kills_Player}</td>
          <td>{i.Assists}</td>
          <td>{i.Team_Name ? <p className={i.TeamId} onClick={(e) => this.getTeam(e)}>{i.Team_Name}</p> : ""}</td>
        </tr>
        )}
        // {/* </div> */}
        )
      }
      </table>)
    }

   
  render() {
    if (this.props.match.loading ==="success"){
      return (
        this.renderMatchInfo()
      )
    } else {
      return "Loading..."
    }
 }
}

const mapStateToProps = state => {
    // console.log(state)
    return {
      gods: state.gods,
      items: state.items,
      // builds: state.builds,
      player: state.player,
      playerMatches: state.playerMatches,
      match: state.match,
      clan: state.clan,
      loading: state.loading
    }
  }

  export default connect(mapStateToProps, {fetchPlayer, fetchPlayerById, fetchClan, fetchMatchDetails})(Match)


//x amount of players ....  each one has all this, separate by win/lose, link the player maybe? link the god, link each item.  
// Player name and clan, game stats - build!, damage etc, , account stats, 
// "playerName":   "Win_Status": "Winner","[iTziz]iTzJosmar19","Account_Level": 89,    "Mastery_Level": 79,"GodId": 1698,(link)
// "Distance_Traveled": 343390,"Camps_Cleared": 1,      "Damage_Bot": 55296,
//       "Damage_Done_In_Hand": 1146,
//       "Damage_Done_Magical": 72430,
//       "Damage_Done_Physical": 0,
//       "Damage_Mitigated": 5709,
//       "Damage_Player": 17134,
//       "Damage_Taken": 12499,
//       "Damage_Taken_Magical": 5656,
//       "Damage_Taken_Physical": 6843,
// // "Structure_Damage": 999,"Killing_Spree": 5,
//       "Kills_Bot": 165,
//       "Kills_Double": 1,
//       "Kills_Fire_Giant": 0,
//       "Kills_First_Blood": 0,
//       "Kills_Gold_Fury": 0,
//       "Kills_Penta": 0,
//       "Kills_Phoenix": 0,
//       "Kills_Player": 8,
//       "Kills_Quadra": 0,
//       "Kills_Siege_Juggernaut": 0,
//       "Kills_Single": 7,
//       "Kills_Triple": 0,      "Deaths": 2,"Assists": 10,
//       "ActiveId1": 7672,
//       "ActiveId2": 8879,      "ItemId1": 9634,
//       "ItemId2": 15725,
//       "ItemId3": 7784,
//       "ItemId4": 18179,
//       "ItemId5": 14080,
//       "ItemId6": 9849,

//       "Gold_Earned": 14265,
//       "Gold_Per_Minute": 830,
//       "Healing": 3302,
//       "Healing_Bot": 1189,
//       "Healing_Player_Self": 4984,



// /
//   [
//     {
//       "Account_Level": 89,
//       "ActiveId1": 7672,
//       "ActiveId2": 8879,
//       "ActiveId3": 0,
//       "ActiveId4": 0,
//       "ActivePlayerId": "12212408",
//       "Assists": 10,
//       "Ban1": "",
//       "Ban10": "",
//       "Ban10Id": 0,
//       "Ban1Id": 0,
//       "Ban2": "",
//       "Ban2Id": 0,
//       "Ban3": "",
//       "Ban3Id": 0,
//       "Ban4": "",
//       "Ban4Id": 0,
//       "Ban5": "",
//       "Ban5Id": 0,
//       "Ban6": "",
//       "Ban6Id": 0,
//       "Ban7": "",
//       "Ban7Id": 0,
//       "Ban8": "",
//       "Ban8Id": 0,
//       "Ban9": "",
//       "Ban9Id": 0,
//       "Camps_Cleared": 1,
//       "Conquest_Losses": 0,
//       "Conquest_Points": 0,
//       "Conquest_Tier": 7,
//       "Conquest_Wins": 0,
//       "Damage_Bot": 55296,
//       "Damage_Done_In_Hand": 1146,
//       "Damage_Done_Magical": 72430,
//       "Damage_Done_Physical": 0,
//       "Damage_Mitigated": 5709,
//       "Damage_Player": 17134,
//       "Damage_Taken": 12499,
//       "Damage_Taken_Magical": 5656,
//       "Damage_Taken_Physical": 6843,
//       "Deaths": 2,
//       "Distance_Traveled": 343390,
//       "Duel_Losses": 0,
//       "Duel_Points": 0,
//       "Duel_Tier": 0,
//       "Duel_Wins": 0,
//       "Entry_Datetime": "6/13/2020 1:06:36 AM",
//       "Final_Match_Level": 20,
//       "First_Ban_Side": "",
//       "GodId": 1698,
//       "Gold_Earned": 14265,
//       "Gold_Per_Minute": 830,
//       "Healing": 3302,
//       "Healing_Bot": 1189,
//       "Healing_Player_Self": 4984,
//       "ItemId1": 9634,
//       "ItemId2": 15725,
//       "ItemId3": 7784,
//       "ItemId4": 18179,
//       "ItemId5": 14080,
//       "ItemId6": 9849,
//       "Item_Active_1": "Aegis Amulet",
//       "Item_Active_2": "Purification Beads",
//       "Item_Active_3": "",
//       "Item_Active_4": "",
//       "Item_Purch_1": "Shoes of Focus",
//       "Item_Purch_2": "Evolved Book of Thoth",
//       "Item_Purch_3": "Chronos' Pendant",
//       "Item_Purch_4": "Obsidian Shard",
//       "Item_Purch_5": "Book of the Dead",
//       "Item_Purch_6": "Magic Focus",
//       "Joust_Losses": 0,
//       "Joust_Points": 0,
//       "Joust_Tier": 0,
//       "Joust_Wins": 0,
//       "Killing_Spree": 5,
//       "Kills_Bot": 165,
//       "Kills_Double": 1,
//       "Kills_Fire_Giant": 0,
//       "Kills_First_Blood": 0,
//       "Kills_Gold_Fury": 0,
//       "Kills_Penta": 0,
//       "Kills_Phoenix": 0,
//       "Kills_Player": 8,
//       "Kills_Quadra": 0,
//       "Kills_Siege_Juggernaut": 0,
//       "Kills_Single": 7,
//       "Kills_Triple": 0,
//       "Kills_Wild_Juggernaut": 0,
//       "Map_Game": "Clash",
//       "Mastery_Level": 79,
//       "Match": 1049526090,
//       "Match_Duration": 0,
//       "MergedPlayers": null,
//       "Minutes": 17,
//       "Multi_kill_Max": 2,
//       "Objective_Assists": 3,
//       "PartyId": 1221628,
//       "Rank_Stat_Conquest": 1458.08521,
//       "Rank_Stat_Duel": 1380.46875,
//       "Rank_Stat_Joust": 1354.03674,
//       "Reference_Name": "Ra",
//       "Region": "NA",
//       "Skin": "Silve-RA-do",
//       "SkinId": 7772,
//       "Structure_Damage": 999,
//       "Surrendered": 1,
//       "TaskForce": 1,
//       "Team1Score": 0,
//       "Team2Score": 0,
//       "TeamId": 700348883,
//       "Team_Name": "TheiTz",
//       "Time_In_Match_Seconds": 1030,
//       "Towers_Destroyed": 0,
//       "Wards_Placed": 1,
//       "Win_Status": "Winner",
//       "Winning_TaskForce": 1,
//       "hasReplay": "n",
//       "hz_gamer_tag": "iTzJosmar19",
//       "hz_player_name": "Josmar777",
//       "match_queue_id": 466,
//       "name": "Normal: Clash",
//       "playerId": "12212408",
//       "playerName": "[iTziz]iTzJosmar19",
//       "playerPortalId": "10",
//       "playerPortalUserId": "2535445218419858",
//       "ret_msg": null
//     },