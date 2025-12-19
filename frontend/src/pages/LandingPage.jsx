import React from "react";
import Navbar from "../components/common/Navbar";
import ContactForm from "../components/landing/ContactForm";
import ProjectsSection from "../components/sections/ProjectsSection";
import ClientsSection from "../components/sections/ClientsSection";
import Newsletter from "../components/sections/Newsletter";

const LandingPage = () => {
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
        <main className="landing-page">
            <header className="landing-header">
                <Navbar />
            </header>

            <section className="hero">
                <ContactForm/>
            </section>

            <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white px-6 md:px-20 ">
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
            </section>

            
            <section className="py-20 bg-white relative overflow-hidden">
            
            
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    {/* Title Section */}
                    <h2 className="text-3xl font-bold text-blue-900 mb-2">Why Choose Us?</h2>
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
            </section>

            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4">
        
                    {/* Section Header & Layout */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1D3557] mb-4">
                            Our Projects
                        </h2>
                    
                        {/* Sub-description from reference image */}
                        <p className="text-gray-500 max-w-2xl mx-auto text-2xl leading-relaxed">
                            We know what buyers are looking for and suggest projects that will bring 
                            clients top dollar for the sale of their homes.
                        </p>
                    </div>

                    {/* Cards Area */}
                    <ProjectsSection />
                </div>
            </section>


            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 ">
                    <h1 className="text-center text-3xl mb-4 font-bold">Happy Clients</h1>
                    <ClientsSection />
                </div>
            </section>

            <section className="relative py-28 flex items-center justify-center text-center overflow-hidden">
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
            </section>

            
            <Newsletter />
        </main>
    );
};

export default LandingPage;