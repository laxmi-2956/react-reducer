import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as CounterReducer } from "./counter/reducer";
import { reducer as ProductReducer } from "./product/reducer";
import { thunk } from "redux-thunk";




let rootReducer = combineReducers({
    counter : CounterReducer,
    product : ProductReducer

})

export let store = legacy_createStore(rootReducer, applyMiddleware(thunk));