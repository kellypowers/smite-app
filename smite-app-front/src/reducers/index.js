import { combineReducers } from "redux";
import playerReducer from './playerReducer';
import itemsReducer from './itemsReducer'
import godsReducer from './godsReducer';
import buildsReducer from "./buildsReducer";
 
const rootReducer = combineReducers({
  builds: buildsReducer,
  gods: godsReducer,
  player: playerReducer,
  items: itemsReducer
});
 
export default rootReducer