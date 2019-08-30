// FIND_ACTION
import {handleActions} from "redux-actions";
const defaultState = {
    list:[],
    flag:true,
    text:''      
}
export default handleActions({
    FIND_ACTION:(state,action)=>{
        let newState=Object.assign({},state);
        newState.list=action.payload.val.data;
        newState.text=action.payload.item;      
        if(action.payload.val.data.length===0){
            newState.flag=true;
        }else{
            newState.flag=false;
        } 
        return newState
    },
    CLEAR_ACTION:(state,action)=>{
        let newState=JSON.parse(JSON.stringify(state)); 
        newState.text='';
        newState.flag=true;
        return newState;
       
      }
},defaultState)

