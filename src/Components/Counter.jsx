import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD, SUB } from '../Redux/counter/actionType';
import { AddToCounter, SubToCounter } from '../Redux/counter/action';

const Counter = () => {


    const dispatch = useDispatch();
    const {counter} = useSelector((store)=>store.counter);
    

  return (
    <div>
      <h1>{counter}</h1>

      <button style={{fontSize : '26px', padding : '4px 30px' , backgroundColor : 'black' , color : 'white' , borderRadius : '5px' , margin : '10px'}} onClick={()=>{
        dispatch(AddToCounter(1))
        console.log(counter);
      }}> + </button>
      <button style={{fontSize : '26px', padding : '4px 30px' , backgroundColor : 'black' , color : 'white' , borderRadius : '5px'}} onClick={()=>{
        dispatch(SubToCounter(1))
      }}> -  </button>
    </div>
  );
}

export default Counter
