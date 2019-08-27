import {handleActions} from "redux-actions";

const defaultState = {
    list:[
    
    ],
}

export default handleActions({
    HOME_ACTION:(state,action)=>{
        let newState=Object.assign({},state);
        newState.list=action.payload;       
        return newState
    }
},defaultState)