import { FAIL, LOAD, SUC } from "./action"

const initialState = {
    isLoading : false,
    isError : false,
    data : []
}

export function reducer (state = initialState, {type,payload})
{   

    switch(type)
    {
        case LOAD :
            return {...state , isLoading:payload}

        case SUC :
            return {...state ,data:payload}

        case FAIL :
            return {...state,isError:payload}

        default :
            return state
    }

}