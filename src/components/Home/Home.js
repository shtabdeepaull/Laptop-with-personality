import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import img from '../image/img.png';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useProducts();

    return (
        <section>
            <div className='grid gap-x-5   grid-cols-2  m-6'>
                <div className='mt-20'>
                    <h2 className='text-4xl font-semibold '>Laptop With Personality</h2>
                    <p className='font-mono'>Laptop has a place in our heart when it's about our work and gaming.
                        And we bring you the most powerful machine that's worth buying at a fare price. Here, we will discuss about the best laptops of 2022. We will help you to decide which one you should buy from your recommendations.
                    </p>
                    <button className=' p-2 rounded mt-5 font-mono font-semibold bg-red-700 hover:bg-slate-500'>Live Demo</button>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>

            <div>
                <p className='text-center text-2xl font-bold mt-16'>Customer Review</p>
                <div className='grid grid-cols-3 mt-8'>
                    {

                        products.slice(0, 3).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
                <Link to='/reviews'>
                    <button className='border-2 bg-slate-400 rounded-lg w-20 h-12 m-10'>See more</button>
                </Link>
            </div>
        </section>


    );
};

export default Home;