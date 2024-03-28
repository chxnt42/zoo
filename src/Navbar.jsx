import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex h-24 w-screen fixed top-0 left-0 bg-white'>
        <div className='flex w-1/3 ml-auto items-center justify-evenly'>
            <Link to="#" className='text-black text-2xl border-b-4 border-transparent hover:border-black hover:text-black'>test</Link>
            <Link to="#" className='text-black text-2xl border-b-4 border-transparent hover:border-black hover:text-black'>test</Link>
            <Link to="#" className='text-black text-2xl border-b-4 border-transparent hover:border-black hover:text-black'>test</Link>
            <Link to="#" className='text-black text-2xl border-b-4 border-transparent hover:border-black hover:text-black'>test</Link>
            <Link to="#" className='text-black text-2xl border-b-4 border-transparent hover:border-black hover:text-black'>test</Link>

        </div>
    </div>
  )
}
