import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import week from "./reducers/week_choice"
import city from "./reducers/city"
import carts from "./reducers/carts"//购物车商品数据池

const reducer = combineReducers({
    week,
    city,
    carts,
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;