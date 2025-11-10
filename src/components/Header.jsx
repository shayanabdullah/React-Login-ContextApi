import React, { useContext } from 'react'
import { CounterContext } from '../context/context'

const Header = () => {
 const {count} = useContext(CounterContext)

  return (
    <div className='py-8 pl-2 border-b '>
        <h2 className='text-5xl font-bold'>Count : {count}</h2>
    </div>
  )
}
export default Header