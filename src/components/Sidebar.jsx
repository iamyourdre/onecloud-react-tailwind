import React from 'react';
import { BsCloudFog2Fill } from "react-icons/bs";
import { GrAppsRounded, GrCircleInformation, GrCloudComputer, GrFormClose, GrMenu, GrNetwork, GrStorage, GrUserSettings, GrVmMaintenance } from "react-icons/gr";
import { TbApiApp } from "react-icons/tb";
import { TbTransactionDollar } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { useLocation, Link } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Mendapatkan lokasi rute saat ini

  // Fungsi untuk mengecek apakah rute saat ini sesuai dengan link
  const isActive = (path) => location.pathname === path;

  return (
    <div className="drawer lg:drawer-open w-auto z-50">
      <input id="main-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="main-sidebar" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-[#22232e] min-h-full w-auto gap-2 ">
          {/* Sidebar content here */}
          <li className='pt-1.5 pb-6 mx-2 lg:hidden flex-row '>
            <label htmlFor="main-sidebar" className='btn btn-circle lg:hidden rounded-full bg-[#434753] hover:bg-[#434753]/50 border-0 text-neutral-300'><GrFormClose className='text-2xl'/></label>
            <a className='my-auto hover:bg-[#434753] ml-2 lg:ml-0'>
              <BsCloudFog2Fill className='text-2xl'/>
              <span className='text-lg font-bold'>OneCloud</span>
            </a>
          </li>
          <li className='pt-1.5 pb-3 mx-2 hidden lg:block'>
            <a>
              <BsCloudFog2Fill className='text-4xl'/>
              <span className='text-2xl font-bold'>OneCloud</span>
            </a>
          </li>
          <li className={`${isActive('/') ? 'bg-[#434753] text-neutral-300' : ''} mx-2 p-1 rounded-xl`}>
            {/* Gunakan Link dari react-router-dom untuk navigasi */}
            <Link to="/" className="focus:text-neutral-300">
              <div className='w-6 text-lg'>
                <GrAppsRounded />
              </div>
              Dashboard
            </Link>
          </li>
          <li className={`${isActive('/vm') ? 'bg-[#434753] text-neutral-300' : ''} mx-2 p-1 rounded-xl`}>
            {/* Gunakan Link dari react-router-dom untuk navigasi */}
            <Link to="/vm" className="focus:text-neutral-300">
              <div className='w-6 text-lg'>
                <GrCloudComputer />
              </div>
              Virtual Machine
            </Link>
          </li>
          <li className={`${isActive('/storage') ? 'bg-[#434753] text-neutral-300' : ''} mx-2 p-1 rounded-xl`}>
            {/* Gunakan Link dari react-router-dom untuk navigasi */}
            <Link to="/storage" className="focus:text-neutral-300">
              <div className='w-6 text-lg'>
               <GrStorage />
              </div>
              Storage
            </Link>
          </li>
          <li className={`${isActive('/monitoring') ? 'bg-[#434753] text-neutral-300' : ''} mx-2 p-1 rounded-xl`}>
            {/* Gunakan Link dari react-router-dom untuk navigasi */}
            <Link to="/monitoring" className="focus:text-neutral-300">
              <div className='w-6 text-lg'>
               <GrVmMaintenance />
              </div>
              Monitoring
            </Link>
          </li>
          <li className={`${isActive('/network') ? 'bg-[#434753] text-neutral-300' : ''} mx-2 p-1 rounded-xl`}>
            {/* Gunakan Link dari react-router-dom untuk navigasi */}
            <Link to="/network" className="focus:text-neutral-300">
              <div className='w-6 text-lg'>
               <GrNetwork />
              </div>
              Network
            </Link>
          </li>
          <li className={`${isActive('/administrator') ? 'bg-[#434753] text-neutral-300' : ''} mx-2 p-1 rounded-xl`}>
            {/* Gunakan Link dari react-router-dom untuk navigasi */}
            <Link to="/administrator" className="focus:text-neutral-300">
              <div className='w-6 text-lg'>
               <GrUserSettings />
              </div>
              Administrator
            </Link>
          </li>
          <div className="bg-[#434753] text-neutral-300 mx-2 p-2 rounded-xl mt-2">
            <p className='px-[0.7rem] text-neutral-400 text-xs py-3 hover:bg-transparent'><GrCircleInformation className='w-4 mr-2 inline my-auto'/>Services Information</p>
            <ul className='menu p-0 m-0 gap-1'>
              <li>
                <Link to="/api" className='p-2.5 focus:bg-[#22232e]/50 focus:text-neutral-300'>
                  <div className='w-6 text-lg'>
                  <TbApiApp />
                  </div>
                  APIs & Services
                </Link>
              </li>
              <li>
                <Link to="/billing" className='p-2.5 focus:bg-[#22232e]/50 focus:text-neutral-300'>
                  <div className='w-6 text-lg'>
                  <TbTransactionDollar />
                  </div>
                  Billing & Limit
                </Link>
              </li>
              <li>
                <Link to="/support" className='p-2.5 focus:bg-[#22232e]/50 focus:text-neutral-300'>
                  <div className='w-6 text-lg'>
                  <MdSupportAgent />
                  </div>
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
