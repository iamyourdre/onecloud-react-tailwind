import React from 'react'
import { GrCloudComputer } from 'react-icons/gr'
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from 'react-icons/fa6';


const CardVM = () => {
  return (
    <div className='bg-gradient-to-br from-[#73dbdf] to-[#d4f591] rounded-xl text-primary'>
      <div className='bg-transparent p-4'>
        <div className="flex gap-3">
          <div className="p-2 bg-white/60 text-primary w-14 h-14 rounded-lg grid content-center">
            <GrCloudComputer className='text-3xl mx-auto'/>
          </div>
          <p className="whitespace-pre-line h-auto my-auto leading-none">
            <span className='text-lg'><b>Virtual Machine</b></span><br/>
            <span className='text-xs'>8 VMs Deployed</span>
          </p>
        </div>
        <div className='flex mt-4'>
          <div className="w-5/6 h-0.5 bg-accent rounded-s-full"></div>
          <div className="w-1/6 h-0.5 bg-red-500"></div>
        </div>
        <div className="mt-2 pb-2">
          <span className='text-xs float-left'><GoDotFill className='inline text-accent'/>7 Running</span>
          <span className='text-xs float-right'><GoDotFill className='inline text-red-500'/>1 Failed</span>
        </div>
      </div>
      <a href='/' className="bg-transparent border-t border-t-[#6fcbce] px-4 py-2 text-xs block">
        See Details
        <FaArrowRight className='inline float-right relative top-0.5'/>
      </a>
    </div>
  )
}

export default CardVM