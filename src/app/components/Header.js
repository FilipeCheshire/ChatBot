'use client'

import React from 'react';

const Header = () => {
    return (
        <header className="bg-zinc-800  text-white h-16">
            <div className='flex'>
                <input
                    id='a'
                    type='text'
                    className='p-1 my-4 mx-5 rounded-sm text-black bg-white w-96'
                    placeholder='Buscar...'>
                </input>
                <div className=' px-5 my-3 mr-5 bg-white rounded-full ml-auto' />
            </div>
        </header>
    );
};

export default Header;
