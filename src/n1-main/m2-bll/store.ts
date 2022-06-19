import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";


let rootReducer=combineReducers({


})

export type AppStateType=ReturnType<typeof rootReducer>


export let store =createStore(rootReducer, applyMiddleware(thunk))

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=ThunkDispatch<RootState,unknown,AnyAction>
export type AppThunk<ReturnType=void>=ThunkAction<ReturnType, RootState,unknown,AnyAction>

