// FIND_ACTION
import {handleActions} from "redux-actions";

const defaultState = {
    list:[],
    flag:true      
}

export default handleActions({
    FIND_ACTION:(state,action)=>{
        let newState=Object.assign({},state);
        newState.list=action.payload.data; 
        newState.flag=!newState.flag  
        console.log(newState) 
        return newState
    }
},defaultState)