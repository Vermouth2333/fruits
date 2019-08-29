import {handleActions} from "redux-actions";

const defaultState = {
    data:[]
}

export default handleActions({
    CITY_DATA:(state,action)=>{
        let goodsState = Object.assign({},state);
        goodsState.data = action.payload.data;
        console.log(goodsState.data)
        

        return goodsState;
    },

},defaultState)




