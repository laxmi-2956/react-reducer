export const SUC = "SUCCESS"
export const LOAD = "LOADING"
export const FAIL = "FAILURE"

import axios from "axios";

export function fetchData (dispatch){
        dispatch({ type: "Loading" , payload:false});
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            dispatch({type:SUC, payload:res.data})
    })
        .catch((err)=>{
            dispatch({type:FAIL, payload:true})
        })
    }
