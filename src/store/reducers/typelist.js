import {handleActions} from "redux-actions";

const defaultState = {
    goodsType:[],
    greennum:"0",
    flaglist:[],
    flag:true,
    footerlist:[]
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
    },
    SEND_FLAG:(state,action)=>{
        let flagState = Object.assign({},state);
        flagState.flaglist = action.payload;
        flagState.flag=""
        return flagState;
    },
    DETAIL_FOOTER:(state,action)=>{
        
        let footerState = Object.assign({},state);
        footerState.footerlist = action.payload;
        return footerState;
    },
    
},defaultState)




