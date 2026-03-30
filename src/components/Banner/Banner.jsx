import React from 'react';
import bannerImage from "../../assets/banner.png"

const Banner = () => {
    return (
        <section className="w-full bg-gray-50 py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <span className="inline-block bg-purple-100 text-purple-600 text-sm px-4 py-1 rounded-full mb-4">
                        ● New: AI-Powered Tools Available
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                        Supercharge Your <br /> Digital Workflow
                    </h1>

                    <p className="text-gray-600 mb-6 max-w-md">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today. Explore
                        Products
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-purple-600 btn text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition">
                            Explore Products
                        </button>

                        <button className=" btn flex items-center gap-2 border border-purple-600 text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-50 transition">
                            ▶ Watch Demo
                        </button>
                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <div className="bg-gray-100 p-4 rounded-2xl shadow-sm">
                        <img
                            src={bannerImage}
                            alt="Hero"
                            className="w-full max-w-md rounded-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;



