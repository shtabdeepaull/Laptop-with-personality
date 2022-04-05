import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';


const Reviews = () => {
    const [products,setProducts] = useProducts()
    
    return (
        <div className='grid grid-cols-3'>
            {
               products.map(product => <Product
                key={product._id}
                product={product}
               ></Product>)
              
            }
        </div>
    
    );
    
};

export default Reviews;