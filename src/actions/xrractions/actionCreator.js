import {createAction} from "redux-actions"
import {type_types} from "@api/xrrapi"
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
