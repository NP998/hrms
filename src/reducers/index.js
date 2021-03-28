
//combine all reducers (means combine all shopkeeper)
import {combineReducers} from 'redux';
import userReducer from "./userReducer";

//here user is a single reducer
const rootReducer=combineReducers({user:userReducer,})

export default rootReducer;