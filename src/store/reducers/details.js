import {handleActions} from "redux-actions";
const defaultState = {
    list_banner:[],
    data:'',
    num:1
}
export default handleActions({   
    DETAILS_ACTION:(state,action)=>{              
        let newState=Object.assign({},state);             
        newState.list_banner=action.payload.data.templatePhoto  
        newState.data=action.payload.data                 
        return newState
    },
    TOGGLE_ACTION:(state,action)=>{              
        let newState=Object.assign({},state);             
        newState.num=action.payload            
        return newState
    }
   
},defaultState)