import {handleActions} from "redux-actions";
const defaultState = {
  list:[],
  inputVal:'',
  flag:'',
}

export default handleActions({   
    DES_ACTION:(state,action)=>{            
        let newState=JSON.parse(JSON.stringify(state));      
        newState.list=action.payload?action.payload.val.data:'';        
        newState.inputVal=decodeURI(action.payload.value);                   
        return newState;
    },
    CLEAR_ACTION:(state,action)=>{
      let newState=JSON.parse(JSON.stringify(state)); 
      newState.inputVal='';
      newState.flag=true;
      return newState
    }
},defaultState)