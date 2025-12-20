import React, { useState } from 'react';
import API from '../../services/api.js';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        city: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        setLoading(true);

        const res = await API.post('/contact', formData);

        setMessage(res.data.message || 'Form submitted successfully');

        // Reset form
        setFormData({
            fullName: '',
            email: '',
            mobileNumber: '',
            city: ''
        });

        } catch (error) {
        setMessage(
            error.response?.data?.message || 'Something went wrong'
        );
        } finally {
        setLoading(false);
        }
    };

    return (
        <div 
        className="min-h-screen flex items-center bg-gray-200"
        style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}
        >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

            {/* Parent Flex Container */}
            <div className="relative w-full flex flex-col md:flex-row items-center max-w-6xl mx-auto">
                
                {/* Left Div - Text */}
                <div className="w-full md:w-1/2 text-white px-8 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Consultation,<br />Design,<br />& Marketing
                    </h1>
                </div>

                {/* Right Div - Form */}
                <div className="w-full md:w-1/2 flex justify-center px-8">
                    <div className="bg-[#53618B] p-8 rounded-lg w-full max-w-md shadow-2xl">

                        <h2 className="text-white text-3xl font-bold text-center mb-8">
                        Get a Free <br /> Consultation
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/40 text-white p-3 rounded placeholder-white/70"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/40 text-white p-3 rounded placeholder-white/70"
                        />

                        <input
                            type="text"
                            name="mobileNumber"
                            placeholder="Mobile Number"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/40 text-white p-3 rounded placeholder-white/70"
                        />

                        <input
                            type="text"
                            name="city"
                            placeholder="Area, City"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/40 text-white p-3 rounded placeholder-white/70"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#F36F21] text-white font-bold py-3 rounded hover:bg-[#E25F0F] transition"
                        >
                            {loading ? 'Submitting...' : 'Get Quick Quote'}
                        </button>

                        {message && (
                            <p className="text-white text-center mt-2 text-sm">
                            {message}
                            </p>
                        )}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
