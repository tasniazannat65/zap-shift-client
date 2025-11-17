import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../assets/banner/banner1.png'
import bannerImg2 from '../assets/banner/banner2.png'
import bannerImg3 from '../assets/banner/banner3.png'
import { MdArrowOutward } from 'react-icons/md';

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true}
        >
                <div className='relative'>
                    <img src={bannerImg1} />
                    <p  className='text-[#606060] absolute top-[440px] left-20'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.   From <br /> personal packages to business shipments — we deliver on time, every time.</p>
                    <div className=" space-x-3 flex  absolute top-[500px] left-20">

                        <div className='flex items-center'>
                            <button className="btn font-bold text-xl  rounded-full bg-[#CAEB66] py-4 px-8">Track Your Parcel</button>
                        <div className='rounded-full bg-black p-3'>
                            <MdArrowOutward size={24} color='#CAEB66'/>
                        </div>
                        </div>
                        <button className="btn font-bold text-[#1F1F1F] text-xl border border-[#DADADA] rounded-xl bg-base-100 py-4 px-8">Be A Rider</button>

                      </div>
                </div>
               <div className='relative'>
                    <img src={bannerImg2} />
                    <p  className='text-[#606060] absolute top-[430px] left-24'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.   From <br /> personal packages to business shipments — we deliver on time, every time.</p>
                    <div className=" space-x-3 flex  absolute top-[480px] left-20">

                        <div className='flex items-center'>
                            <button className="btn font-bold text-xl  rounded-full bg-[#CAEB66] py-4 px-8">Track Your Parcel</button>
                        <div className='rounded-full bg-black p-3'>
                            <MdArrowOutward size={24} color='#CAEB66'/>
                        </div>
                        </div>
                        <button className="btn font-bold text-[#1F1F1F] text-xl border border-[#DADADA] rounded-xl bg-base-100 py-4 px-8">Be A Rider</button>

                      </div>
                </div>
                <div>
                    <img src={bannerImg3} />
                </div>
            </Carousel>
    );
};

export default Banner;