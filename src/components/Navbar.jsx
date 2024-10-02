import React from 'react'
import { GrMenu } from 'react-icons/gr';
import { HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="navbar w-full py-3 px-4 lg:px-8">
      <div className="flex-1">
        <label htmlFor="main-sidebar" className='btn bg-transparent border border-[#434753] hover:bg-[#434753] text-neutral-300 shadow-none lg:hidden'><GrMenu className='text-xl'/></label>
        <p className="pl-3.5 lg:pl-0 text-lg whitespace-pre-line leading-none">
          <b>Welcome Back,</b> Dre!<br/>
          <span className='text-xs'>Administrator</span>
        </p>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control hidden lg:block">
          <label className="input input-bordered bg-transparent border border-[#434753] flex items-center gap-3 h-10">
            <HiOutlineSearch/>
            <input type="text" className="grow" placeholder="Search" />
          </label>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://i.ibb.co.com/FxGgjtp/424627713-1905009476619885-2760474932887027253-n.jpg"
                className='object-contain'/>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#434753]">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar