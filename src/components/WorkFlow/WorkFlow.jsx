import React from 'react';

const WorkFlow = () => {
    return (
        <div className="w-full bg-linear-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] py-20 px-6 text-center text-white">
            <div className="max-w-4xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    Ready To Transform Your Workflow?
                </h2>

                <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-10 max-w-2xl mx-auto">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    Start your free trial today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <button className="bg-white text-[#8b5cf6] font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-all shadow-lg">
                        Explore Products
                    </button>

                    <button className="border-2 border-white/60 bg-transparent text-white font-semibold py-4 px-10 rounded-full hover:bg-white/10 transition-all">
                        View Pricing
                    </button>
                </div>

                <div className="text-sm opacity-80 font-light tracking-wide">
                    14-day free trial • No credit card required • Cancel anytime
                </div>

            </div>
        </div>
    );
};

export default WorkFlow;