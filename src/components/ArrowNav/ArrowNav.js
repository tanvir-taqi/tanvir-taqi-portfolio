import React from 'react';
import { NavLink } from 'react-router-dom';

const ArrowNav = ({leftLink,rightLink}) => {
    return (
        <div className='flex justify-between fixed w-full inset-y-28 md:inset-y-72 bg-transparent text-4xl md:text-7xl'>
            <NavLink className={({ isActive }) => (isActive ? 'mx-4  font-semibold   my-2 text-gray-600 ' : 'mx-4  font-semibold   my-2')} to={leftLink}>&lt;</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'mx-4  font-semibold   my-2 text-gray-600 ' : 'mx-4  font-semibold   my-2')} to={rightLink}>&gt;</NavLink>
        </div>
    );
};

export default ArrowNav;