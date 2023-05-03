import React from 'react';

const Banner = () => {
    return (
        <div className='bg-base-200 flex content-center items-center '>
            <div className='pt-6 pb-6 pl-8'>
                <img className='w-full rounded-xl h-full ' src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />

            </div>
            <div>
                <h1 className='text-6xl ml-24 leading-relaxed font-bold'><span className='text-indigo-600'>Welcome to</span>  our <br /> website. <span className=''>We will provide</span> you  <br /> our <span className='text-indigo-600'>best service</span>.</h1>
            </div>
        </div>
    ); 
};

export default Banner;