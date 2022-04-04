import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='font-bold text-xl p-4 '>
            <nav className='space-x-5 inline-flex  '>
              <CustomLink to='/'>Home</CustomLink>
              <CustomLink to='/reviews'>Reviews</CustomLink>
              <CustomLink to='/dashboard'>Dashboard</CustomLink>
              <CustomLink to='/blogs'>Blogs</CustomLink>
              <CustomLink to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;