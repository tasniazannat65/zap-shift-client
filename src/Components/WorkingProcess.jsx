import React from 'react';
import trackingImg from '../assets/live-tracking.png'
import safeDelivery from '../assets/safe-delivery.png'

const WorkingProcess = () => {
    return (
        <div className='space-y-7 my-12'>
            <div className='rounded-3xl p-8 bg-[#ffffffb3] flex gap-7 items-center shadow-lg hover:shadow-xl'>
                <img src={trackingImg} alt="" />
                <div className='border-2 border-dashed border-gray-300 h-24'></div>
                <div className='space-y-3'>
                    <h3 className='font-extrabold text-2xl text-[#03373D]'>Live Parcel Tracking</h3>
                    <p className='font-medium text-[16px] text-[#606060]'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
            <div className='rounded-3xl p-8 bg-[#ffffffb3] flex gap-7 items-center shadow-lg hover:shadow-xl'>
                <img src={safeDelivery} alt="" />
                <div className='border-2 border-dashed border-gray-300 h-24'></div>
                <div className='space-y-3'>
                    <h3 className='font-extrabold text-2xl text-[#03373D]'>100% Safe Delivery</h3>
                    <p className='font-medium text-[16px] text-[#606060]'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                </div>
            </div>
            <div className='rounded-3xl p-8 bg-[#ffffffb3] flex gap-7 items-center shadow-lg hover:shadow-xl'>
                <img src={safeDelivery} alt="" />
                <div className='border-2 border-dashed border-gray-300 h-24'></div>
                <div className='space-y-3'>
                    <h3 className='font-extrabold text-2xl text-[#03373D]'>24/7 Call Center Support</h3>
                    <p className='font-medium text-[16px] text-[#606060]'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;