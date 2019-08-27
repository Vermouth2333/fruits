import {createAction} from 'redux-actions'
import {home_api,find_api} from '@api/syyapi/home'
// 同步的
export const HomeAction=createAction('HOME_ACTION',(val)=>val)
//异步 首页
export const HomeAsyncAction=()=>{
    return async(dispatch)=>{
        let data=await home_api();
        dispatch(HomeAction(data))
    }
}

// 搜索页
export const FindAction=createAction('FIND_ACTION',(val)=>val)
export const FindAsyncAction=(val)=>{
    return async(dispatch)=>{
        let data=await find_api(val);       
        dispatch(FindAction(data))
    }
}