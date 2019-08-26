import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import city from "./reducers/city"
import TypeList from "./reducers/typelist"

const reducer = combineReducers({
    city,
    TypeList,
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;