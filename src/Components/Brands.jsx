import React from 'react';
import brand1 from '../assets/brands/casio.png'
import brand2 from '../assets/brands/amazon.png'
import brand3 from '../assets/brands/moonstar.png'
import brand4 from '../assets/brands/star.png'
import brand5 from '../assets/brands/start_people.png'
import brand6 from '../assets/brands/randstad.png'
import Marquee from 'react-fast-marquee';

const Brands = () => {
    return (
        <div className='py-10'>
            <h2 className='text-3xl mb-8 font-extrabold text-[#03373D] text-center'>We've helped thousands of sales teams</h2>
            <Marquee
            pauseOnHover={true}
            speed={70}
           
            >
              
                  <img className='mr-10 h-8' src={brand1} alt="" />
                <img className='mr-10 h-8' src={brand2} alt="" />
                <img className='mr-10 h-8' src={brand3} alt="" />
                <img className='mr-10 h-8' src={brand4} alt="" />
                <img className='mr-10 h-8' src={brand5} alt="" />
                <img className='h-8 mr-10' src={brand6} alt="" />
            
            </Marquee>
            
        </div>
    );
};

export default Brands;