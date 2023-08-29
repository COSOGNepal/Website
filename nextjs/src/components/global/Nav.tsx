import React from 'react'

function Nav() {
  return (
    <div className='px-8 py-4 flex items-center justify-between w-1/1'>
      <div className='font-bold text-2xl'>
        Logo
      </div>
    <div className='navContents flex align-middle'>
     <div className='text-white text-base'>
          Home
    </div>
    <div className='text-white text-base mx-5'>
          Blog
    </div>
    <div className='text-white text-base'>
          Contact
    </div>
    </div>

<div className='flex align-middle'>
    <div className='h-10 leading-10 bg-btn-sec-red text-center rounded-lg w-44'>
          Login
    </div>
    <div className='h-10 leading-10 bg-btn-pri-red text-center rounded-lg w-44 ml-5'>
          Register
    </div>
    </div>


    </div>
  )
}

export default Nav
