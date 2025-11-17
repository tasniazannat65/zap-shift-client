import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import reviewsImg from '../assets/customer-top.png'
import ReviewCard from './ReviewCard';

const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise);
    console.log(reviews)
    return (
        <div>
            <div className='flex flex-col text-center space-y-5 mb-8'>
                <img src={reviewsImg} className='w-60 h-24 mx-auto' alt="" />
                <h2 className='font-extrabold text-4xl text-[#03373D]'>What our customers are sayings</h2>
                <p className='text-[16px] text-[#606060] max-w-3xl mx-auto'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <Swiper
            loop={true}
               effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          scale: 0.75,
          modifier: 1,
          slideShadows: true,
        }}

        autoplay={{
            delay: 2000,

        }}
        pagination={true}
          navigation={{
            
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
    
  }}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="mySwiper my-10"
            
            >


                {
                    reviews.map(review => (
                                  <SwiperSlide >
                                   <ReviewCard key={review.id} review={review}/>
                                  </SwiperSlide>

                    ))
                }
                <div className="flex justify-center items-center gap-40 mt-6">
  {/* Prev Button */}
  <button className="custom-prev w-10 h-10 rounded-full bg-[#03373D]/10 flex items-center justify-center text-[#03373D]">
    ←
  </button>

  {/* Pagination Dots */}
  <div className="swiper-pagination "></div>

  {/* Next Button */}
  <button className="custom-next w-10 h-10 rounded-full bg-[#A6C92E] flex items-center justify-center text-white">
    →
  </button>
</div>

        
      

            </Swiper>


            
        </div>
    );
};

export default Reviews;