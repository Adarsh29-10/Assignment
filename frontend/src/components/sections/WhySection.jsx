import React from 'react';

const WhySection = () => {

    const features = [
        {
            id: 1,
            title: "Potential ROI",
            description: "Whether you are looking to buy a fixer-upper or renovate your current home for sale, we will walk you through potential returns for projects.",
            // Using a simple home icon matching the reference
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Design",
            description: "Our in-house interior design team will partner with you to guide through your design options and coordinating contractors to complete the home upgrade.",
            // Using a paint brush icon matching the reference
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Marketing",
            description: "Staging consultation, professional photos, and a sophisticated digital marketing plan accompany every listing to reach today's buyers.",
            // Using a dollar sign icon matching the reference
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m.599-1.599A2.003 2.003 0 0013 16m-3.987-1.413A2.001 2.001 0 0110 13m0-3c0-.88.39-1.64 1-2.14" />
                </svg>
            )
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            {/* Title Section */}
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
                Why Choose Us?
            </h2>

            <div className="w-16 h-1 bg-blue-600 mx-auto mb-16"></div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {features.map((item) => (
                    <div key={item.id} className="flex flex-col items-center group">
                        {/* Circular Icon Container */}
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                            {item.icon}
                        </div>
                    
                        {/* Feature Text */}
                        <h3 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide">
                            {item.title}
                        </h3>
                        
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Decorative Orange Arrow at bottom-right (matching reference image) */}
            <div className="flex justify-end mt-12 pr-10">
                <div className="text-orange-500 cursor-pointer hover:translate-x-1 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default WhySection;