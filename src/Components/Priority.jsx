import React from 'react';
import location from '../assets/location-merchant.png'
import bgImg from '../assets/be-a-merchant-bg.png'

const Priority = () => {
    return (
        <div className="bg-[#03373D] mb-16 p-20 rounded-4xl bg-no-repeat bg-top-left" style={{backgroundImage: `url(${bgImg})`}}>
            <div className='flex  items-center gap-10'>
                <div className='space-y-5 flex-1'>
                    <h2 className='text-white font-extrabold text-4xl'>Merchant and Customer Satisfaction is Our First Priority</h2>
                    <p className='text-[16px] text-[#DADADA]'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                    <div className='flex items-center gap-2'>
                        <button className="btn font-bold text-xl  rounded-full bg-[#CAEB66] py-4 px-8">Become a Merchant</button>
                    <button className="btn font-bold text-xl bg-[#03373D] border-2 border-[#CAEB66]  rounded-full text-[#CAEB66] py-4 px-8">Earn with ZapShift Courier</button>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src={location} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Priority;