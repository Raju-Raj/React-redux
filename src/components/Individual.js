import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { individualData } from '../redux/actions'

const Individual = () => {
  const id = useParams().id
  const dispatch = useDispatch()
  const data = useSelector(state=>state.individualData.product)

  console.log(data)

  useEffect(()=>{
    dispatch(individualData(id))
  },[])

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.email}</h2>
      <p>{data.username}</p>
    
    </div>
  )
}

export default Individual