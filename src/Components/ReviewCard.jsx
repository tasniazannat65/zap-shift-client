import React from 'react';
import colonImg from '../assets/reviewQuote.png'

const ReviewCard = ({review}) => {

    return (
        <div className='bg-white rounded-xl p-4 space-y-4'>
            <img src={colonImg} alt="" />
            <p className='text-[16px] font-medium text-[#606060]'>{review.review}</p>
            <div className='border border-gray-300 border-dashed'></div>
            <div className='flex items-center gap-2'>
                <img className='rounded-full w-12 h-12' src={review.user_photoURL} alt="" />
                <div>
                    <h4 className='text-xl font-extrabold text-[#03373D]'>{review.userName}</h4>
                    <p className='text-[16px] font-medium text-[#606060]'>{review.user_email}</p>

                </div>

            </div>
            
        </div>
    );
};

export default ReviewCard;