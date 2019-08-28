import {handleActions} from "redux-actions";

const defaultState = {
    goodsType:[],
    greennum:"0"
}

export default handleActions({
    GOODS_TYPES:(state,action)=>{
        let goodsState = Object.assign({},state);
        goodsState.goodsType = action.payload.data;
        return goodsState;
    },
    GREEN_CARTS:(state,action)=>{
        // console.log(action)
        let greenState = Object.assign({},state);
        greenState.greennum = action.payload;
        return greenState;
    }
},defaultState)