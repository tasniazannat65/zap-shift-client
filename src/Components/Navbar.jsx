import React from 'react';
import logoImg from '../assets/logo.png'
import { Link } from 'react-router';
import { MdArrowOutward } from "react-icons/md";
import MyLink from './MyLink';


const Navbar = () => {
    const links = <>
    
    <li className='text-lg text-[#606060]'><MyLink to='/services'>Services</MyLink></li>
    <li className='text-lg text-[#606060]'><MyLink to='/coverage'>Coverage</MyLink></li>
    <li className='text-lg text-[#606060]'><MyLink to='/about'>About Us</MyLink></li>
    <li className='text-lg text-[#606060]'><MyLink to='/pricing'>Pricing</MyLink></li>
    <li className='text-lg text-[#606060]'><MyLink to='/be-a-rider'>Be a Rider</MyLink></li>
    </>
    return (
        <div className='lg:py-7 md:py-6 py-5'>
                   <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto rounded-2xl px-8 py-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {links}
      </ul>
    </div>
     <Link to='/' className='flex '>
          <img className=' w-8 h-8' src={logoImg} alt="" />
       <p className=' font-extrabold text-[28px] '>ZapShift</p>
     </Link>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end space-x-3">
    <a className="btn font-bold text-[#606060] text-xl border border-[#DADADA] rounded-xl bg-base-100 py-4 px-8">Sign In</a>
    <div className='flex items-center'>
        <a className="btn font-bold text-xl  rounded-xl bg-[#CAEB66] py-4 px-8">Be a rider</a>
    <div className='rounded-full bg-black p-3'>
        <MdArrowOutward size={24} color='#CAEB66'/>
    </div>
    </div>
  </div>
</div>
        </div>

    );
};
 
export default Navbar;