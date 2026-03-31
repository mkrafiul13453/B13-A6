import React, { use } from 'react';
import SingleCard from './SingleCard';

const ProductCard = ({ promiseData }) => {
    const products = use(promiseData)
    return (
        <div className='grid grid-cols-3 gap-6 max-w-7xl mx-auto'>
            {
                products.map((product) => <SingleCard product={product} key={product.id}></SingleCard>) 
            }
        </div>
    );
};

export default ProductCard;