import React, { useContext } from 'react'
import { LoginContext } from '../context/context';

const Banner = () => {
     const { isLoggedIn, } = useContext(LoginContext);

  return (
  <>
  <div className="py-20 text-center">
    <h1 className='text-6xl font-bold '>
        {
            isLoggedIn === false ? 'Please Log in To Continue' : 'Welcome To ShopCo....'
        }
    </h1>
  </div>
  </>
  )
}

export default Banner