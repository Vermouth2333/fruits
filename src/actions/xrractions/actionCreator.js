import {createAction} from "redux-actions"
import {type_types,city_list} from "@api/xrrapi"
import { async } from "q";

//同步的action
export const goodsTypesAction = createAction("GOODS_TYPES",(val)=>val);
//异步的action 处理异步  当数据请求成功后通过dispacth触发同步action
export const goodsTypesAsyncAction = ()=>{
    return async (dispatch)=>{
        let data = await type_types();
        dispatch(goodsTypesAction(data))
    }
}

export const sendDataToCarts = createAction("GOODS_CARTS",(val)=>val);
export const sendAsyncDataToCarts = (val)=>{
    return (dispatch)=>{
        dispatch(sendDataToCarts(val))
    }
}




export const sendGreenToCarts = createAction("GREEN_CARTS",(val)=>val);
export const sendGreenAsyncToCarts = (val)=>{
    return (dispatch)=>{
        dispatch(sendGreenToCarts(val))
    }
}



export const sendDetailToD = createAction("SEND_FLAG",(val)=>val);
export const sendFlagAsyncToDetail = (val)=>{
    return (dispatch)=>{
        dispatch(sendDetailToD(val))
    }
}


export const cityData = createAction("CITY_DATA",(val)=>val);
export const cityAsyncData = ()=>{
    return async (dispatch)=>{
        let data=await city_list();
        console.log(data)
        dispatch(cityData(data))
    }
}
