import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import city from "./reducers/city"
import carts from "./reducers/carts"//购物车商品数据池
import TypeList from "./reducers/typelist"
const reducer = combineReducers({
    city,
    carts,
    TypeList,
})
const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;