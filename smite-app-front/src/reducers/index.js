import { combineReducers } from "redux";
import playerReducer from './playerReducer';
import itemsReducer from './itemsReducer'
import godsReducer from './godsReducer';
import buildsReducer from "./buildsReducer";
import matchReducer from "./matchReducer";
import redirectReducer from "./redirectReducer";
import playerMatchesReducer from "./playerMatchesReducer";
import playerGodRanksReducer from "./playerGodRanksReducer";
 
const rootReducer = combineReducers({
  gods: godsReducer,
  player: playerReducer,
  items: itemsReducer,
  builds: buildsReducer,
  match: matchReducer,
  player_matches: playerMatchesReducer,
  god_ranks: playerGodRanksReducer
  // redirect: redirectReducer
});
 
export default rootReducer