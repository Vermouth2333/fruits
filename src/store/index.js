import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import home from "./reducers/home"
import search from './reducers/search'

const reducer = combineReducers({
    home,
    search,   
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;