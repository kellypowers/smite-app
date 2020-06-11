import { combineReducers } from "redux";
import playerReducer from './playerReducer';
import itemsReducer from './itemsReducer'
import godsReducer from './godsReducer';
import buildsReducer from "./buildsReducer";
 
const rootReducer = combineReducers({
  gods: godsReducer,
  player: playerReducer,
  items: itemsReducer,
  builds: buildsReducer
});
 
export default rootReducer