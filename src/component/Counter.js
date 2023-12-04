import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increament, decreament, reset} from '../redux/ReduxToolkitCounter'

function Counter() {

    const counter = useSelector((store)=> store.counter)
    console.log(counter);
    const dispatch = useDispatch()



  return (
    <div className='Counter'>
      <div className="container mt-5 ">
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <h1 className=' border-bottom border-dark '>Redux Toolkit Counter</h1>
                <div className='row'>
                    <div className="col d-flex  justify-content-between  py-5 mt-3">
                        <button   onClick={()=> dispatch(decreament())} className='btn btn-primary border-0 px-4 '>increament (-)</button>
                        <p className=' fs-1'>{counter.data}</p>
                        <button onClick={()=> dispatch(increament())} className='btn btn-danger border-0 px-4'>decreament (+)</button>
                    </div>
                    <button onClick={()=> dispatch(reset())} className='btn btn-warning' >Reset</button>
                </div>
            </div>
            <div className="col"></div>
        </div>
      </div>
    </div>
  )
}

export default Counter
