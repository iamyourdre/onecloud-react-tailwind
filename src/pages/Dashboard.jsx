import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import CardVM from '../components/CardVM'
import CardStorage from '../components/CardStorage'
import CardUptime from '../components/CardUptime'
import Chart1 from '../components/Chart1'
import Table from '../components/Table'
import Breadcrumbs from '../components/Breadcrumbs'

const Dashboard = () => {
  return (
    <div className='bg-[#020411]'>
      <div className="lg:flex font-sans text-neutral-200">
        <Sidebar/>
        <div className="lg:grow w-full">
          <Navbar />
          <div className="px-4 lg:px-8">
            <Breadcrumbs />
            <div className="grid md:grid-cols-3 gap-4 pb-4">
              <CardVM />
              <CardStorage />
              <CardUptime />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className='h-80 w-auto rounded-xl p-4 bg-[#22232e]'>
                <span className='text-lg'><b>Monthly Usage</b></span>
                <button className='text-xs float-right btn btn-xs border-0 bg-[#434753] text-neutral-300 rounded-full hover:text-primary shadow-none'>See More</button>
                <Chart1 />
              </div>
              <div className='max-h-96 lg:h-80 w-auto rounded-xl p-4 bg-[#22232e]'>
                <span className='text-lg'><b>VM Status</b></span>
                <button className='text-xs float-right btn btn-xs border-0 bg-[#434753] text-neutral-300 rounded-full hover:text-primary shadow-none'>See More</button>
                <Table />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard