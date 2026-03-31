import React, { use } from 'react';
import SingleCard from './SingleCard';

const ProductCard = ({ promiseData, carts, setCarts }) => {
    const products = use(promiseData)
    return (
        <div className='grid grid-cols-3 gap-6 max-w-7xl mx-auto mt-16'>
            {
                products.map((product,) => <SingleCard carts={carts} setCarts={setCarts} product={product} key={product.id}></SingleCard>) 
            }
        </div>
    );
};

export default ProductCard;