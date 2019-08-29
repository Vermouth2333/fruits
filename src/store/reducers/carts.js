import {handleActions} from "redux-actions";

const defaultState = {
    //购物车数据id
    cartsGoods:[]
}

export default handleActions({
    GOODS_CARTS:(state,action)=>{
        let goodsState = JSON.parse(JSON.stringify(state));
        goodsState.cartsGoods.push(action.payload);
        return goodsState;
    },
    ADD_NUMBER:(state,action)=>{
        let addNumState = JSON.parse(JSON.stringify(state));
        addNumState.cartsGoods[action.payload].num++;
        return addNumState;
    },
    SUB_NUMBER:(state,action)=>{
        let subNumState = JSON.parse(JSON.stringify(state));
        if(subNumState.cartsGoods[action.payload].num!==1){
            subNumState.cartsGoods[action.payload].num--;
        }
        return subNumState;
    },
    SHOP_SELECT:(state,action)=>{
        let shopSelectState = JSON.parse(JSON.stringify(state));
            shopSelectState.cartsGoods[action.payload].flag=!shopSelectState.cartsGoods[action.payload].flag;
        return shopSelectState;
    },
},defaultState)