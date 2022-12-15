import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";


export type CounterRootStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer)