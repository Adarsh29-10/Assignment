import React from 'react';

const DescriptionSection = () => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                    
                    {/* Left Content Section */}
                    <div className="space-y-6">
                        <div className="relative">
                            <h1 className="text-4xl md:text-6xl font-bold text-[#1D3557] leading-tight ">
                            Not Your Average Realtor
                            </h1>
                        </div>
                    
                        <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
                            Real Trust has an eye for seeing a property's potential, 
                            coordinating design, and effective marketing to get 
                            homeowners top dollar on their sales.
                        </p>
                    </div>


                    {/* Right Image Composition Section */}
                    <div className="relative flex justify-center items-center">
                        {/* Main Large Center Image (Circular) */}
                        <div className="relative z-20 w-64 h-64 md:w-80 md:h-80 rounded-full border-12 border-white shadow-2xl overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                                alt="Main Realtor" 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Top Right Smaller Circular Image */}
                        <div className="absolute -top-10 -right-4 md:-top-16 md:right-0 z-30 w-32 h-32 md:w-44 md:h-44 rounded-full border-8 border-white shadow-xl overflow-hidden">
                            <img 
                            src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=200" 
                            alt="Client Handshake" 
                            className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Bottom Right Smaller Circular Image */}
                        <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:right-10 z-30 w-28 h-28 md:w-40 md:h-40 rounded-full border-8 border-white shadow-xl overflow-hidden">
                            <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                            alt="Happy Homeowner" 
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
    );
};

export default DescriptionSection;