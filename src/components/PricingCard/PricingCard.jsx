import React from 'react';

const PricingCard = () => {
    return (
        <div className="bg-white py-20 px-6 font-sans">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-[#1a1c20] text-4xl md:text-4xl font-bold mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    <div className="bg-[#F9FAFB] border border-gray-100 rounded-3xl p-8 shadow-sm h-136">
                        <h3 className="text-2xl font-bold text-[#1a1c20] mb-2">Starter</h3>
                        <p className="text-gray-400 mb-6">Perfect for getting started</p>
                        <div className="mb-8">
                            <span className="text-5xl font-bold text-[#1a1c20]">$0</span>
                            <span className="text-gray-400">/Month</span>
                        </div>
                        <ul className="space-y-4 mb-10 ">
                            <li className="flex items-center text-gray-600">
                                <span className="text-green-500 mr-2">✓</span> Access to 10 free tools
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="text-green-500 mr-2">✓</span> Basic templates
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="text-green-500 mr-2">✓</span> Community support
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="text-green-500 mr-2">✓</span> 1 project per month
                            </li>
                        </ul>
                        <button className="w-full py-4 bg-[#7828C8] text-white font-bold rounded-2xl hover:bg-[#6020A0] transition-colors">
                            Get Started Free
                        </button>
                    </div>

                    <div className=" bg-[#7828C8] rounded-3xl p-8 shadow-xl  ">
                        <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                        <p className="text-white/80 mb-6">Best for professionals</p>
                        <div className="mb-8">
                            <span className="text-5xl font-bold text-white">$29</span>
                            <span className="text-white/80">/Month</span>
                        </div>
                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center text-white">
                                <span className="text-white mr-2">✓</span> Access to all premium tools
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-white mr-2">✓</span> Unlimited templates
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-white mr-2">✓</span> Priority support
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-white mr-2">✓</span> Unlimited projects
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-white mr-2">✓</span> Cloud sync
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-white mr-2">✓</span> Advanced analytics
                            </li>
                        </ul>
                        <button className="w-full py-4 bg-white text-[#7828C8] font-bold rounded-2xl hover:bg-gray-100 transition-colors">
                            Start Pro Trial
                        </button>
                    </div>

                    <div className="bg-[#F9FAFB] border border-gray-100 rounded-3xl p-8 shadow-sm">
                        <h3 className="text-2xl font-bold text-[#1a1c20] mb-2">Enterprise</h3>
                        <p className="text-gray-400 mb-6">For teams and businesses</p>
                        <div className="mb-8">
                            <span className="text-5xl font-bold text-[#1a1c20]">$99</span>
                            <span className="text-gray-400">/Month</span>
                        </div>
                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center text-gray-600">
                                <span className="text-green-500 mr-2">✓</span> Everything in Pro
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="text-green-500 mr-2">✓</span> Team collaboration
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="text-green-500 mr-2">✓</span> Custom integrations
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="text-green-500 mr-2">✓</span> Dedicated support
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="text-green-500 mr-2">✓</span> SLA guarantee
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="text-green-500 mr-2">✓</span> Custom branding
                            </li>
                        </ul>
                        <button className="w-full py-4 bg-[#7828C8] text-white font-bold rounded-2xl hover:bg-[#6020A0] transition-colors">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PricingCard;