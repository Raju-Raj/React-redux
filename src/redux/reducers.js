import {FETCH_PRODUCTS_FAIL, FETCH_PRODUCTS_LOADING,FETCH_PRODUCTS_SUCCESS, INDIVIDUAL_DATA_FAIL, INDIVIDUAL_DATA_LOADING, INDIVIDUAL_DATA_SUCCESS } from './types'

const initialState={
    loading:false,
    products:[],
    errMsg:""
}

const individualState={
    loading:false,
    product:[],
    errMsg:""
}

export const fetchProductsReducers = (state=initialState,action) => {
    switch(action.type){
        case FETCH_PRODUCTS_LOADING:
            return {...state,loading:true}
        case FETCH_PRODUCTS_SUCCESS:
            return {...state,loading:false,products:action.payload}
        case FETCH_PRODUCTS_FAIL:
            return {...state,loading:false,errMsg:action.payload}
        default:
            return state
    }
}

export const individualDataReducers = (state=individualState,action) => {
    switch(action.type){
        case INDIVIDUAL_DATA_LOADING:
            return {...state,loading:true}
        case INDIVIDUAL_DATA_SUCCESS:
            return {...state,loading:false,product:action.payload}
        case INDIVIDUAL_DATA_FAIL:
            return {...state,loading:false,errMsg:action.payload}
        default:
            return state
    }
}