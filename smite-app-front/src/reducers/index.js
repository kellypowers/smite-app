import { combineReducers } from "redux";
import playerReducer from './playerReducer';
import itemsReducer from './itemsReducer'
import godsReducer from './godsReducer';
import buildsReducer from "./buildsReducer";
import matchReducer from "./matchReducer";
import playerMatchesReducer from "./playerMatchesReducer";
 
const rootReducer = combineReducers({
  gods: godsReducer,
  player: playerReducer,
  items: itemsReducer,
  builds: buildsReducer,
  match: matchReducer,
  playerMatches: playerMatchesReducer
});
 
export default rootReducer