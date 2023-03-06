import React from 'react';
import { NavLink } from 'react-router-dom';
import './ArrowNav.css'

const ArrowNav = ({leftLink,rightLink}) => {
    return (
        <div className='hidden  md:flex  justify-between fixed  w-full  md:inset-y-64  md:text-6xl '>
            <NavLink className={({ isActive }) => (isActive ? 'mx-4  font-extralight my-2 text-gray-600 bg-transparent arrow-link' : ' mx-4 font-extralight bg-transparent arrow-link  my-2')} to={leftLink}>&lt;</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'mx-4  font-extralight my-2 text-gray-600 bg-transparent arrow-link' : ' mx-4 font-extralight bg-transparent  arrow-link my-2')} to={rightLink}>&gt;</NavLink>
        </div>
    );
};

export default ArrowNav;