import {handleActions} from "redux-actions";
const defaultState = {
 cityHot:[],
 cityList:[]
}

export default handleActions({   
    CITY_ACTION:(state,action)=>{              
        let newState=Object.assign({},state);              
        for(let i=0;i<action.payload.length;i++){
            if(action.payload[i].isHot){
                newState.cityHot.push(action.payload[i])
            }else{
                newState.cityList.push(action.payload[i])
            }
        }                   
        return newState
    }
},defaultState)