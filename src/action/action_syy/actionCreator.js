import {createAction} from 'redux-actions'
import {home_api,find_api,keys_api,city_api,Details_api} from '@api/syyapi/home'
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
// 
// ToDesAsyncAction
export const ToDesAction=createAction('DES_ACTION',(val,value)=>({val,value}))
export const ToDesAsyncAction=(value)=>{   
    return async(dispatch)=>{      
        let data=await keys_api(value,3,1,50,1);                  
        dispatch(ToDesAction(data,value))        
    }
}
// 城市列表
export const CityAction=createAction('CITY_ACTION',(val)=>val)
export const CityAsyncAction=()=>{   
    return async(dispatch)=>{      
        let data=await city_api();                        
        dispatch(CityAction(data.data.cities))        
    }
}
//详情页
export const DetailsAction=createAction('DETAILS_ACTION',(val)=>val)
export const DetailsAsyncAction=(id)=>{   
    return async(dispatch)=>{          
        let data=await Details_api(3,id,'',3,1);                          
        dispatch(DetailsAction(data))        
    }
}
// 切换详情页 Toggle_action
export const Toggle_action=createAction('TOGGLE_ACTION',(val)=>val)
