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
//修改input数据
export const changeAddressInput = createAction("CHANGE_ADDRESS_INPUT",(val,inputType)=>({
    val,
    inputType,
}));   
//添加地址信息
export const addAddressData = createAction("ADD_ADDRESS_DATA");
//选中地址栏中的地址
export const selectThisMain = createAction("SELECT_THIS_MAIN",(index)=>index);
//更新选中的数据
export const updateThisMain = createAction("UPDATE_THIS_MAIN",(inx)=>inx);
//替换选中的数据
export const replaceAddressData = createAction("REPLACE_ADDRESS_DATA");
//删除选中的数据
export const deletesAddressData = createAction("DELETE_ADDRESS_DATA");
