import { combineReducers } from "redux";
import playerReducer from './playerReducer';
import godsReducer from './godsReducer';
 
const rootReducer = combineReducers({
  gods: godsReducer,
  player: playerReducer
});
 
export default rootReducer