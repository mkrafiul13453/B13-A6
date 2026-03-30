import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between ">
            <div className="">
                <a className=" text-4xl font-bold text-purple-600">DigiTools</a>
            </div>
        
            <div>
                <p className='btn btn-ghost'>Products</p>
                <p className='btn btn-ghost'>Features</p>
                <p className='btn btn-ghost'>Pricing</p>
                <p className='btn btn-ghost'>Testimonials</p>
                <p className='btn btn-ghost'>FAQ</p>
            </div>

            <div className="flex justify-between gap-2.5">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div>
                    <p className='btn mr-2.5'>Login</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
            </div>

        </div>
    );
};

export default Navbar;