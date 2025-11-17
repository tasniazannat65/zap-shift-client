import React from 'react';
import HowItWorks from '../Components/HowItWorks';
import Services from './Services';
import WorkingProcess from '../Components/WorkingProcess';
import Banner from '../Components/Banner';
import Brands from '../Components/Brands';
import Reviews from '../Components/Reviews';
import Priority from '../Components/Priority';

const reviewsPromise = fetch('/reviews.json').then(res=>res.json())


const Home = () => {
    return (
        <div>
            <section>
                <Banner/>
            </section>
            <section>
                <HowItWorks/>
            </section>
            <section>
                <Services/>
            </section>
            <section>
                <Brands/>
            </section>
            <div className='border-2 border-gray-300 mt-6 mb-10 border-dashed'></div>
            <section>
                <WorkingProcess/>
            </section>
                        <div className='border-2 border-gray-300 border-dashed my-16'></div>
                        <section>
                            <Priority/>
                        </section>
                        <section>
                            <Reviews reviewsPromise={reviewsPromise}/>
                        </section>

            
        </div>
    );
};

export default Home;