import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({children, to}) => {
    return (
        <NavLink to={to} 
        className={({isActive})=> isActive ? 'btn bg-[#CAEB66] rounded-full ' : '' }
        >{children}</NavLink>
    
    );
};

export default MyLink;