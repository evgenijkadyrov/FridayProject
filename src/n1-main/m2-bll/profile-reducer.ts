import React from "react";

import {Dispatch} from "redux";



let initialState = {

}
type ActionsType=act1Type

export type initialStateType = typeof initialState
//@ts-ignore
export const profilePageReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {



}

//actions
export const act1 = () => ({  } as const)


//types
export type act1Type = ReturnType<typeof act1>




//thunks
export const th1 = () => {
    return (dispatch: Dispatch) => {


    }
}
