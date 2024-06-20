import React from 'react'
import loader2 from "/loader2.gif";

function Loading() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <img className='h-[20%] object-cover' src={loader2} alt="" />
    </div>
  )
}

export default Loading