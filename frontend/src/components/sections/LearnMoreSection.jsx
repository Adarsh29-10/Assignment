import React from 'react';

const LearnMoreSection = () => {
    return (
        <>
        <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ 
            backgroundImage: `url('https://images.pexels.com/photos/271614/pexels-photo-271614.jpeg')`, // Use a modern interior image
            }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* 2. Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center">
            <h1 className="text-white text-3xl md:text-4xl font-bold max-w-2xl leading-tight mb-10">
                Learn more about our listing process, as well as our additional staging and design work.
            </h1>

            <button className="bg-white text-[#2B82F6] hover:bg-gray-100 px-10 py-3 font-bold uppercase text-sm tracking-widest transition-all duration-300 shadow-lg">
                Learn More
            </button>
        </div>
        </>
    );
};

export default LearnMoreSection;