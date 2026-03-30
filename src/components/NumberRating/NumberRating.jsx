import React from 'react';

const NumberRating = () => {
    return (
        <div className="bg-[#7828C8] p-10 flex flex-col sm:flex-row justify-center items-center text-center text-white font-sans gap-8 sm:gap-0">

            <div className="flex-1 px-4 border-b sm:border-b-0 sm:border-r border-white/20 pb-8 sm:pb-0">
                <div className="text-5xl font-bold mb-2">50K+</div>
                <div className="text-xl opacity-90">Active Users</div>
            </div>

            <div className="flex-1 px-4 border-b sm:border-b-0 sm:border-r border-white/20 py-8 sm:py-0">
                <div className="text-5xl font-bold mb-2">200+</div>
                <div className="text-xl opacity-90">Premium Tools</div>
            </div>

            <div className="flex-1 px-4 pt-8 sm:pt-0">
                <div className="text-5xl font-bold mb-2">4.9</div>
                <div className="text-xl opacity-90">Rating</div>
            </div>

        </div>
    );
};

export default NumberRating;