import {createAction} from "redux-actions"

//商品+1
export const addNumber = createAction("ADD_NUMBER",(index)=>index);
//商品-1
export const subNumber = createAction("SUB_NUMBER",(index)=>index);
//选择商品
export const shopSelect = createAction("SHOP_SELECT",(index)=>index);
//全选
export const changeAll = createAction("CHANGE_ALL_FLAG");
//切换删除 结算
export const changeHeaderCenter = createAction("CHANGE_HEADER_CENTER");
//商品删除
export const deleteShop = createAction("DELETE_SHOP");
//删除所有商品
export const deleteAllShop = createAction("DELETE_ALL_SHOP");
//显示地址
export const showAddressToTrue = createAction("SHOW_ADDRESS");
//隐藏地址
export const showAddressToFalse = createAction("HIDE_ADDRESS");                                                                                                                       
