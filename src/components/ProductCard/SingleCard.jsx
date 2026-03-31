import React from 'react';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const SingleCard = ({ product, carts, setCarts }) => {
    const [buyNow,setBuyNow] = useState(false);
    const handelBuyNow =()=>{
        setBuyNow(true);
        setCarts([...carts,product])
        toast.success("Add to cart successfully")
    }
    return (
        <div className="relative w-full p-8 bg-white border border-gray-100 rounded-3xl shadow-sm font-sans">
           
                <div className="absolute top-6 right-6 px-4 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full">
                    {product.tag}
                </div>
       

            <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gray-50 rounded-full border border-gray-100">
  <img
    src={product.icon}
    alt={product.name}
    className="w-8 h-8 object-contain"
  />
</div>

            <h2 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {product.description}
            </p>

            <div className="flex items-baseline mb-8">
                <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                <span className="text-slate-400 ml-1 text-sm font-medium">/{product.period}</span>
            </div>

            <ul className="space-y-4 mb-8">
                {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-600">
                        <Check className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-medium">{feature}</span>
                    </li>
                ))}
            </ul>

            <button onClick={handelBuyNow} className={` btn w-full py-4 bg-[#7F26FD] hover:bg-[#6b1edb] text-2xl text-white font-bold rounded-2xl transition-colors duration-200 ${buyNow ? "opacity-20 cursor-not-allowed" : ""}`}>
                {buyNow?"Go to cart":"Buy now"}
            </button>
        </div>
    );
};

export default SingleCard;