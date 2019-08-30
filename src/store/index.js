import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import carts from "./reducers/carts"//购物车商品数据池
import TypeList from "./reducers/typelist"
import home from "./reducers/home"
import search from './reducers/search'
import xrrcity from "./reducers/xrrcity"
import des from './reducers/des'
import city from './reducers/city'
import details from './reducers/details'
import address from './reducers/address'
const reducer = combineReducers({
    carts,
    TypeList,
    home,
    xrrcity,
    search,  
    des, 
    city,
    details,
    address,
})
export const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;