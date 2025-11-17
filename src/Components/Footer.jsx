import React from 'react';
import logoImg from '../assets/logo.png'
import logo1 from '../assets/linkedinIcon2.png'
import logo2 from '../assets/twitterLogo23.png'
import logo3 from '../assets/facebook.png'
import logo4 from '../assets/youtube.png'

const Footer = () => {
    return (
       <footer className="footer footer-horizontal footer-center bg-[#0B0B0B] text-[#DADADA]  p-10">
  <aside>
 <div className='relative'>
      <img className='absolute -top-3 -left-3 w-10 h-10' src={logoImg} alt="" />
   <p className=' font-extrabold text-3xl '>ZapShift</p>
 </div>
    <p className="text-[16px] text-[#DADADA] max-w-3xl mx-auto">
     Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
    </p>
    <div className='border  border-dashed mt-4 text-gray-800 w-full'></div>
    <div className='flex gap-3 font-medium items-center mt-4'>
        <p>Services</p>
        <p>Coverage</p>
        <p>About Us</p>
        <p>Pricing</p>
        <p>Blog</p>
        <p>Contact</p>
    </div>
        <div className='border  border-dashed mt-4 text-gray-800 w-full'></div>

  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
       <img src={logo1} alt="" />
      </a>
      <a>
        <img src={logo2} alt="" />
      </a>
      <a>
       <img src={logo3} alt="" />
      </a>
      <a>
       <img src={logo4} alt="" />
      </a>
    </div>
  </nav>
</footer>
    );
};

export default Footer;