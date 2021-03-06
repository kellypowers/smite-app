import { combineReducers } from "redux";
import playerReducer from './playerReducer';
import itemsReducer from './itemsReducer'
import godsReducer from './godsReducer';
import buildsReducer from "./buildsReducer";
import matchReducer from "./matchReducer";
import playerMatchesReducer from "./playerMatchesReducer";
import playerGodRanksReducer from "./playerGodRanksReducer";
import clanReducer from "./clanReducer";
 
const rootReducer = combineReducers({
  gods: godsReducer,
  player: playerReducer,
  items: itemsReducer,
  builds: buildsReducer,
  match: matchReducer,
  player_matches: playerMatchesReducer,
  god_ranks: playerGodRanksReducer,
  clan: clanReducer
});
 
export default rootReducer