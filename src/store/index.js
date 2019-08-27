import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import carts from "./reducers/carts"//购物车商品数据池
import TypeList from "./reducers/typelist"
import home from "./reducers/home"
import search from './reducers/search'

const reducer = combineReducers({

    home,
    search,   

    carts,
    TypeList,
})
const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;