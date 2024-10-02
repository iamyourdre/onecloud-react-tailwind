import React from 'react'
import { GrRefresh } from 'react-icons/gr'

const Breadcrumbs = () => {
  return (
    <div className='p-1 px-0 py-3.5 flex'>
      <div className="breadcrumbs text-sm">
        <ul>
          <li><a>Administrator</a></li>
          <li><a>Dashboard</a></li>
        </ul>
      </div>
      <div className='my-auto text-right flex-1 hidden lg:block'>
        <span className='badge badge-lg text-xs rounded-md bg-[#22232e] border-0 text-neutral-300'><GrRefresh className='mr-2 text-blue-400' /> Last Sync: Recently</span>
      </div>
    </div>
  )
}

export default Breadcrumbs