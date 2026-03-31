import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum,cart)=>sum+cart.price,0);
    const handelPayment =()=>{
        setCarts([]);
        toast.success("Successfully check out all thing !");
    };
    const handelRemove =(cart)=>{
        const filterItems = carts.filter((c)=>c.id != cart.id)
        setCarts(filterItems);
        toast.error("Remove successfully from your cart");
    };
    return (
        <div className="flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-10 font-sans shadow-lg max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-neutral-900">Your Cart</h2>
            </div>

            {
                carts.length===0? <div className='flex flex-col justify-center items-center space-y-5'>
                    <p className='text-3xl font-bold'>Your card is empty</p>
                    <FiShoppingCart size={60} ></FiShoppingCart>
                </div>:
                <>
                        {
                            carts.map((cart) => <div key={cart.id} className="space-y-4">
                                <div className="flex items-center gap-6 rounded-xl border border-neutral-100 bg-neutral-50 p-6">
                                    <div className="size-16 overflow-hidden rounded-full bg-yellow-100/50 p-3">
                                        <img
                                            alt=""
                                            className="size-full object-contain"
                                            src={cart.icon}
                                        />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <h3 className="text-xl font-semibold text-neutral-900">{cart.name}</h3>
                                        <p className="text-base text-neutral-600">${cart.price}</p>
                                    </div>
                                    <button onClick={() => handelRemove(cart)} className="btn text-sm font-medium text-red-600 hover:text-red-700">Remove</button>
                                </div>

                            </div>)
                        }

                        <div className="flex items-center justify-between border-t border-neutral-200 pt-6">
                            <p className="text-lg text-neutral-600">Total:</p>
                            <p className="text-4xl font-extrabold text-neutral-950">${totalPrice}</p>
                        </div>

                        <button onClick={handelPayment} className="w-full rounded-xl bg-violet-600 px-6 py-4 text-center text-xl font-bold text-white transition-colors hover:bg-violet-700">
                            Proceed To Checkout
                        </button>
                </>
            }

        </div>
    );
};

export default Cart;