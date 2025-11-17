import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const RootLayout = () => {
    return (
        <div className='bg-[#eaeced]'>
           <header>
            <Navbar/>

           </header>
           <main className='min-h-screen max-w-7xl mx-auto'>
            <Outlet/>
           </main>
           <footer>
            <Footer/>
           </footer>

        </div>
    );
};

export default RootLayout;