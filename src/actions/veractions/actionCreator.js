import {createAction} from "redux-actions"

//商品+1
export const addNumber = createAction("ADD_NUMBER",(index)=>index);
//商品-1
export const subNumber = createAction("SUB_NUMBER",(index)=>index);
//选择商品
export const shopSelect = createAction("SHOP_SELECT",(index)=>index);