import React, { useContext } from 'react'
import { CounterContext } from '../context/context'

const Product = () => {
 const {setCount  } = useContext(CounterContext)

  return (
    <div className='py-2 border-b'>
  <button className='p-4 border mt-5 ml-2 rounded-2xl bg-green-300' onClick={()=> setCount((prev) => prev+1)}>
    Increment
  </button> 
  <button className='p-4 border mt-5 ml-2 rounded-2xl bg-red-300' onClick={()=> setCount((prev) => prev-1)}>
    decreament
  </button> 
  <button className='p-4 border mt-5 ml-2 rounded-2xl bg-amber-200' onClick={()=> setCount(0)}>
 reset
  </button> 
    </div>
  )
}

export default Product