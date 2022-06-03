import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchProductsAction } from '../redux/actions';
import {Link} from 'react-router-dom'

function Home() {

  const data = useSelector(state=>state.fetchProducts.products)
  const dispatch=useDispatch()

  useEffect(()=>{
      dispatch(fetchProductsAction())
  },[])
  return (
    <div className="App">
      <div>
        {
          data && data.map((it)=>(
            <Link to={`/individual/${it.id}`} key={it.id}><p>{it.name}</p></Link>
          ))
          }
      </div>
    </div>
  );
}

export default Home;
