import { combineReducers, createStore,applyMiddleware, } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchProductsReducers,individualDataReducers } from "./redux/reducers";



const rootReducers = combineReducers({
    fetchProducts:fetchProductsReducers,
    individualData:individualDataReducers
})
export const store =createStore(rootReducers,composeWithDevTools(applyMiddleware(thunk)))