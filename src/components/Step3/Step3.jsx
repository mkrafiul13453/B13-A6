import React from 'react';
import man from "../../assets/user.png"
import box from "../../assets/package.png"
import rocket from "../../assets/rocket.png"


const Step3 = () => {
    return (
        <div className="bg-[#f9fafb] min-h-screen py-20 px-6 font-sans">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-[#1a1c20] text-4xl md:text-4xl font-bold mb-4">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="relative bg-white border border-gray-100 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm">
                        <span className="absolute top-6 right-6 bg-[#7828C8] text-white text-xs font-bold px-2 py-1 rounded-full w-8 h-8 flex items-center justify-center">
                            01
                        </span>
                        <div className="bg-[#f3e8ff] rounded-full p-6 mb-8">
                            <img
                                src={man}
                                alt="Create Account"
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1a1c20] mb-4">Create Account</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>

                    <div className="relative bg-white border border-gray-100 rounded-2xl p-10 flex flex-col items-center text-center shadow-sm">
                        <span className="absolute top-6 right-6 bg-[#7828C8] text-white text-xs font-bold px-2 py-1 rounded-full w-8 h-8 flex items-center justify-center">
                            02
                        </span>
                        <div className="bg-[#f3e8ff] rounded-full p-6 mb-8">
                            <img
                                src={box}
                                alt="Choose Products"
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1a1c20] mb-4">Choose Products</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>

                    <div className="relative bg-white border border-gray-100 rounded-2xl p-10 flex flex-col items-center text-center shadow-sm">
                        <span className="absolute top-6 right-6 bg-[#7828C8] text-white text-xs font-bold px-2 py-1 rounded-full w-8 h-8 flex items-center justify-center">
                            03
                        </span>
                        <div className="bg-[#f3e8ff] rounded-full p-6 mb-8">
                            <img
                                src={rocket}
                                alt="Start Creating"
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1a1c20] mb-4">Start Creating</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Step3;