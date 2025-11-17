import React from 'react';
import errorImg from '../assets/error.png'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='bg-[#eaeced]'>
            <header>
                <Navbar/>
            </header>

           <section className='bg-white rounded-3xl py-20 px-28 max-w-7xl mx-auto mb-20 flex flex-col justify-center items-center'>
             <img src={errorImg} alt="" />
             <Link to='/' className="btn font-bold text-xl  rounded-xl bg-[#CAEB66] py-4 px-8">Home</Link>
           </section>
            
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default ErrorPage;