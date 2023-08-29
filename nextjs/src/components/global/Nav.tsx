"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function Nav(): React.JSX.Element {
  
  const router = useRouter();

  return (
    <div className='fixed top-0 left-0 px-8 py-4 flex items-center justify-between w-full'>
      <Link href={"/"}> 
        <div className='font-bold text-2xl'>
          Logo
        </div>
      </Link> 
      <div className='navContents flex items-center'>
        <Link href={'/home'}>
          <div className='text-white text-base opacity-70 hover:opacity-100'>
            Home
          </div>
        </Link> 
        <Link href={"/blog"}>
          <div className='text-white text-base mx-5 opacity-70 hover:opacity-100'>
            Blog
          </div> 
        </Link> 
        <Link href={"/contact"}> <div className='text-white text-base opacity-70 hover:opacity-100'>
          Contact
        </div></Link> 
      </div>

      <div className='flex align-middle'>
        <div className='h-10 leading-10 bg-btn-sec-red text-center rounded-lg w-44 cursor-pointer opacity-50 hover:opacity-70' onClick={()=>{router.push("login")}}>
          Login
        </div>
        <div className='h-10 leading-10 bg-btn-pri-red text-center rounded-lg w-44 ml-5 cursor-pointer opacity-90 hover:opacity-100' onClick={()=>{router.push("register")}}>
          Register
        </div>
      </div>
    </div>
  )
}

export default Nav
