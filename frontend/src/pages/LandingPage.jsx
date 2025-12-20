import React from "react";
import Navbar from "../components/common/Navbar";
import ContactForm from "../components/landing/ContactForm";
import ProjectsSection from "../components/sections/ProjectsSection";
import ClientsSection from "../components/sections/ClientsSection";
import NewsLetterSection from "../components/sections/NewsLetterSection";
import DescriptionSection from "../components/sections/DescriptionSection";
import WhySection from "../components/sections/WhySection";
import LearnMoreSection from "../components/sections/LearnMoreSection";

const LandingPage = () => {
    return (
        <main className="overflow-x-hidden">
            <header className="landing-header">
                <Navbar />
            </header>

            {/* hero section */}
            <section>
                <ContactForm/>
            </section>

            {/* Description Section */}
            <section className="bg-white py-25 px-6 md:px-20 ">
                <DescriptionSection />
            </section>

            {/* why section */}
            <section className="py-25 bg-white ">
                <WhySection />
            </section>

            {/* our projects section */}
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


            {/* happy clients section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 ">
                    <h1 className="text-center text-3xl mb-4 font-bold">Happy Clients</h1>
                    <ClientsSection />
                </div>
            </section>


            {/* learn more section */}
            <section className="relative py-28 flex items-center justify-center text-center ">
                <LearnMoreSection />
            </section>

            {/* newsletter section */}
            <NewsLetterSection />
        </main>
    );
};

export default LandingPage;