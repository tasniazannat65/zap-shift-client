import React from 'react';
import pickUpVan from '../assets/bookingIcon.png'

const HowItWorks = () => {
    return (
        <div className='py-7'>
            <h2 className='font-extrabold text-[#03373D] mb-7 text-3xl'>How it Works</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='bg-[#F6FBFC] rounded-3xl p-8 space-y-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#CAEB66]'>
                <img className='w-14 h-14' src={pickUpVan} alt="" />
                <h3 className='font-bold text-xl text-[#03373D]'>Booking Pick & Drop</h3>
                <p className='text-[16px] font-medium text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>

            </div>
            <div className='bg-[#F6FBFC] rounded-3xl p-8 space-y-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#CAEB66]'>
                <img className='w-14 h-14' src={pickUpVan} alt="" />
                <h3 className='font-bold text-xl text-[#03373D]'>Cash On Delivery</h3>
                <p className='text-[16px] font-medium text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>

            </div>
            <div className='bg-[#F6FBFC] rounded-3xl p-8 space-y-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#CAEB66]'>
                <img className='w-14 h-14' src={pickUpVan} alt="" />
                <h3 className='font-bold text-xl text-[#03373D]'>Delivery Hub</h3>
                <p className='text-[16px] font-medium text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>

            </div>
            <div className='bg-[#F6FBFC] rounded-3xl p-8 space-y-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#CAEB66]'>
                <img className='w-14 h-14' src={pickUpVan} alt="" />
                <h3 className='font-bold text-xl text-[#03373D]'>Booking SME & Corporate</h3>
                <p className='text-[16px] font-medium text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>

            </div>
        </div>
        </div>
    );
};

export default HowItWorks;