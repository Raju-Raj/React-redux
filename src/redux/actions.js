import axios from 'axios'
import {FETCH_PRODUCTS_FAIL, FETCH_PRODUCTS_LOADING,FETCH_PRODUCTS_SUCCESS, INDIVIDUAL_DATA_FAIL, INDIVIDUAL_DATA_LOADING, INDIVIDUAL_DATA_SUCCESS } from './types'


export const fetchProductsAction = () => async (dispatch) => {
    try{
        await dispatch({type:FETCH_PRODUCTS_LOADING})

        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        const data = await res.data
        
        await dispatch({type:FETCH_PRODUCTS_SUCCESS,payload:data})
    }catch(err){
        await dispatch({type:FETCH_PRODUCTS_FAIL,payload:err})
    }
}

export const individualData = (id) => async (dispatch) => {
    try{
        await dispatch({type:INDIVIDUAL_DATA_LOADING})

        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

        await dispatch({type:INDIVIDUAL_DATA_SUCCESS, payload:res.data})

    }catch(err){
        await dispatch({type:INDIVIDUAL_DATA_FAIL,payload:err})
    }
}