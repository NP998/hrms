import {USER} from './actionTypes';


export function setUser(userData={}){
    //this action  return object
    return {
        payload:userData,
        type:USER
    }
}