import React from 'react';
import service from '../assets/service.png'

const Services = () => {
    return (
        <div className='bg-[#03373D] rounded-4xl px-40 py-24 my-10'>
           <div className='text-center space-y-3 max-w-3xl mx-auto'>
             <h2 className='font-extrabold text-4xl text-white'>Our Services</h2>
            <p className='font-medium text-[16px] text-[#DADADA]'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-6'>
            <div className='rounded-3xl px-8 py-6 bg-base-100 flex flex-col justify-center items-center text-center space-y-4 hover:bg-[#CAEB66]'>
                <div className='rounded-full mx-auto p-6 bg-gradient-to-t from-[#EEEDFC] to-[#EEEDFC]'>
                    <img src={service} alt="" />
                </div>
                <h3 className='font-bold text-2xl text-[#03373D]'>Express  & Standard Delivery</h3>
                <p className='text-[16px] text-[#606060] font-medium'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>

            </div>




            <div className='rounded-3xl px-8 py-6 bg-base-100 flex flex-col justify-center items-center text-center space-y-4 hover:bg-[#CAEB66]'>
                <div className='rounded-full mx-auto p-7 bg-gradient-to-t from-[#EEEDFC] to-[#EEEDFC]'>
                    <img src={service} alt="" />
                </div>
                <h3 className='font-bold text-2xl text-[#03373D]'>Nationwide Delivery</h3>
                <p className='text-[16px] text-[#606060] font-medium'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>

            </div>


            <div className='rounded-3xl px-8 py-6 bg-base-100 flex flex-col justify-center text-center items-center space-y-4 hover:bg-[#CAEB66]'>
                <div className='rounded-full mx-auto p-7 bg-gradient-to-t from-[#EEEDFC] to-[#EEEDFC]'>
                    <img src={service} alt="" />
                </div>
                <h3 className='font-bold text-2xl text-[#03373D]'>Fulfillment Solution</h3>
                <p className='text-[16px] text-[#606060] font-medium'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>

            </div>




            <div className='rounded-3xl px-8 py-6 bg-base-100 flex flex-col justify-center items-center text-center space-y-4 hover:bg-[#CAEB66]'>
                <div className='rounded-full mx-auto p-7 bg-gradient-to-t from-[#EEEDFC] to-[#EEEDFC]'>
                    <img src={service} alt="" />
                </div>
                <h3 className='font-bold text-2xl text-[#03373D]'>Cash on Home Delivery</h3>
                <p className='text-[16px] text-[#606060] font-medium'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>

            </div>




            <div className='rounded-3xl px-8 py-6 bg-base-100 flex flex-col justify-center items-center text-center space-y-4 hover:bg-[#CAEB66]'>
                <div className='rounded-full mx-auto p-7 bg-gradient-to-t from-[#EEEDFC] to-[#EEEDFC]'>
                    <img src={service} alt="" />
                </div>
                <h3 className='font-bold text-2xl text-[#03373D]'>Corporate Service / Contract In Logistics</h3>
                <p className='text-[16px] text-[#606060] font-medium'>Customized corporate services which includes warehouse and inventory management support.</p>

            </div>



            <div className='rounded-3xl px-8 py-6 bg-base-100 flex flex-col justify-center items-center text-center space-y-4 hover:bg-[#CAEB66]'>
                <div className='rounded-full mx-auto p-7 bg-gradient-to-t from-[#EEEDFC] to-[#EEEDFC]'>
                    <img src={service} alt="" />
                </div>
                <h3 className='font-bold text-2xl text-[#03373D]'>Parcel Return</h3>
                <p className='text-[16px] text-[#606060] font-medium'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>

            </div>
           </div>
            
        </div>
    );
};

export default Services;