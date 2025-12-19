import React, { useState } from 'react';
import API from '../../services/api.js';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (!email) {
            setMessage('Email is required');
            return;
        }
        
        try{
            setLoading(true);
            const res = await API.post('/newsletter', {email});

            setMessage(res.data.message || 'Subscribed successfully');
            setEmail('');
            
        }
        catch(error){
            setMessage(
                error.response?.data?.message || 'Something went wrong'
            );
        }
        finally {
            setLoading(false);
        }

    };

    return (
        <div className="bg-[#2B82F6] py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-6 text-white font-medium text-sm">
                    <a href="#home" className="hover:underline">Home</a>
                    <a href="#services" className="hover:underline">Services</a>
                    <a href="#projects" className="hover:underline">Projects</a>
                    <a href="#testimonials" className="hover:underline">Testimonials</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </nav>

                {/* Subscription Form */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <span className="text-white font-bold whitespace-nowrap">Subscribe Us</span>

                    <form onSubmit={handleSubscribe} className="flex overflow-hidden rounded-md shadow-sm">
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 w-64 focus:outline-none text-sm text-white"
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-white text-[#2B82F6] px-6 py-2 font-bold text-sm hover:bg-gray-100 transition-colors"
                        >
                            {loading ? 'Submitting...' : 'Subscribe'}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Newsletter;