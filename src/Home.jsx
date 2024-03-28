import React from 'react'
import Navbar from './Navbar'
import tigerImg from "./assets/tiger.jpg"

export default function Home() {
  return (
    <>
        <div className='mt-24'>

            <div className='w-screen h-96'>
                <img src={tigerImg} className="object-cover h-full w-full align"></img>
            </div>

            <h1 className='text-7xl font-semibold text-center my-24'>Welcome to rigit zoo</h1>


            <div className='flex gap-10 w-screen justify-center'>
                <img src={tigerImg} className="object-cover shadow-black shadow-xl h-96 w-96  rounded-md "></img>
                <img src={tigerImg} className="object-cover shadow-black shadow-xl h-96 w-96  rounded-md"></img>
                <img src={tigerImg} className="object-cover shadow-black shadow-xl h-96 w-96  rounded-md"></img>
            </div>

            <div className='h-96'></div>
            
        </div>
        <Navbar></Navbar>
    </>
  )
}
