import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { FAIL, fetchData, SUC } from '../Redux/product/action';
const Products = () => {


    const dispatch = useDispatch();
    const {isLoading, isError, data} = useSelector((store)=>store.product);
    

    useEffect(()=>{
        // fetchData(dispatch);

        dispatch(fetchData)

    },[])

  return isLoading ? (
    <h1>Loading....</h1>
  ) : isError ? (
    <h1 style={{fontSize : '30px'}}>Something Went Wrong</h1>
  ) : (
    <div>
      <h1>Product Page</h1>
      {data.map((el) => (
        <>
          <div style={{display:'grid'}}>
            <img src={el.image} height={200} width={200} style={{display : 'flex' , marginLeft : '42%'}}  />
            <h3>{el.description}</h3>
          </div>
        </>
      ))}
    </div>
  );
}

export default Products
