import {handleActions} from "redux-actions";
const defaultState = {
  list:[],
  inputVal:''
}

export default handleActions({   
    DES_ACTION:(state,action)=>{        
        let newState=JSON.parse(JSON.stringify(state));      
        newState.list=action.payload.val.data;
        newState.inputVal=decodeURI(action.payload.value);                   
        return newState;
    }
},defaultState)