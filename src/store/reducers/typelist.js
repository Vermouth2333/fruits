import {handleActions} from "redux-actions";

const defaultState = {
    goodsType:[]
}

export default handleActions({
    GOODS_TYPES:(state,action)=>{
        let goodsState = Object.assign({},state);
        goodsState.goodsType = action.payload.data;
        return goodsState;
    }
},defaultState)