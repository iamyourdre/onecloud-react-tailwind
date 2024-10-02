import React from 'react'
import { GrTime } from 'react-icons/gr'
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from 'react-icons/fa6';


const CardUptime = () => {
  return (
    <div className='bg-gradient-to-bl from-[#615346] to-[#22232e] rounded-xl text-neutral-200'>
      <div className='bg-transparent p-4'>
        <div className="flex gap-3">
        <div className="p-2 bg-[#d86164] text-white w-14 h-14 rounded-lg grid content-center">
            <GrTime className='text-3xl mx-auto'/>
          </div>
          <p className="whitespace-pre-line h-auto my-auto leading-none">
            <span className='text-lg'><b>VMs Uptime</b></span><br/>
            <span className='text-xs'>99.30% Average Uptime</span>
          </p>
        </div>
        <div className='flex mt-4'>
          <div className="w-[99.30%] h-0.5 bg-accent rounded-s-full"></div>
          <div className="w-[0.70%] h-0.5 bg-neutral-400"></div>
        </div>
        <div className="mt-2 pb-2">
          <span className='text-xs float-left'><GoDotFill className='inline text-accent'/>Excellent</span>
        </div>
      </div>
      <a href='/' className="bg-transparent border-t border-t-neutral-700 px-4 py-2 text-xs block">
        See Details
        <FaArrowRight className='inline float-right relative top-0.5'/>
      </a>
    </div>
  )
}

export default CardUptime