import React from 'react';

const Product = (props) => {
    const { picture, image, name, description,rating } = props.product;
    console.log(props.product)
    return (
        <div className='border-none rounded-lg m-8 text-left font-bold'>
            <img className='w-3/4 h-3/4 rounded-lg ' src={picture} alt="" />
            <div className='flex mt-3'>
                <img className='w-5 h-5 rounded-lg' src={image} alt="" />
                <p >Name:{name}</p>
            </div>
            <p className='font-serif mt-3'>Description:
            {description.length > 20 ? description.slice(0,20)+'...' : description}
            </p>
            <p className='mt-3'>Rating:{rating}</p>
        </div>
    );
};

export default Product;