import { combineReducers } from "redux";
import playerReducer from './playerReducer';
import itemsReducer from './itemsReducer'
import godsReducer from './godsReducer';
 
const rootReducer = combineReducers({
  gods: godsReducer,
  player: playerReducer,
  items: itemsReducer
});
 
export default rootReducer