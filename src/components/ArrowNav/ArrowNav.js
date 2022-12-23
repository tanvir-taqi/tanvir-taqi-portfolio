import React from 'react';
import { NavLink } from 'react-router-dom';
import './ArrowNav.css'

const ArrowNav = ({leftLink,rightLink}) => {
    return (
        <div className='hidden md:flex  justify-between fixed  w-full inset-y-28 md:inset-y-72 text-4xl md:text-7xl '>
            <NavLink className={({ isActive }) => (isActive ? 'mx-4  font-semibold   my-2 text-gray-600 bg-transparent arrow-link' : 'mx-4  font-semibold bg-transparent arrow-link  my-2')} to={leftLink}>&lt;</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'mx-4  font-semibold   my-2 text-gray-600 bg-transparent arrow-link' : 'mx-4  font-semibold bg-transparent  arrow-link my-2')} to={rightLink}>&gt;</NavLink>
        </div>
    );
};

export default ArrowNav;