import React from 'react';
import img from '../image/img.png';

const Home = () => {
    return (
        <div className='flex m-6'>
            <div className='mt-5'>
            <h2 className='text-4xl font-semibold '>Laptop With Personality</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et placeat doloribus, est recusandae quibusdam blanditiis rem doloremque laborum tempora.
            </p>
            <button className=' p-2 rounded mt-5 font-mono font-semibold bg-red-700 hover:bg-slate-500'>Live Demo</button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;