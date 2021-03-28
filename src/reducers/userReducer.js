import {USER} from "../actions/actionTypes";

export default (state={},action)=>{
    switch(action.type){
        case USER:
           return action.payload
        
        default:
            return state;   
        
    }
}