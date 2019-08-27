import {handleActions} from "redux-actions";

const defaultState = {
    //购物车数据id
    cartsShops:[1,2,3,4,5,6,7,8],
    cartsGoods:[]
}

export default handleActions({
    GOODS_CARTS:(state,action)=>{
        console.log(action)
        let goodsState = Object.assign({},state);
        goodsState.cartsGoods.push(action.payload);
        return goodsState;
    }

},defaultState)