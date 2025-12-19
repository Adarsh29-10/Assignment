import { useState } from 'react';
import API from '../../services/api.js';
import { useNavigate } from 'react-router-dom';

const AddProject = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        image: '',
        name: '',
        description: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        setLoading(true);

        const res = await API.post('/project', formData);

        setMessage(res.data.message || 'Project added successfully');

        // redirect to projects list
        setTimeout(() => {
            navigate('/admin');
        }, 1000);

        } catch (error) {
        setMessage(
            error.response?.data?.message || 'Something went wrong'
        );
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-linear-to-br from-gray-50 to-gray-100">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-10">
                {/* Header */}
                <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Add New Project</h2>
                <p className="text-gray-500 text-sm">Create a new real estate project listing</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                {/* Image URL Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL
                    </label>
                    <input
                        type="text"
                        name="image"
                        placeholder="https://example.com/image.jpg"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white text-gray-900 placeholder-gray-400"
                        required
                    />
                </div>

                {/* Project Name Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter project name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white text-gray-900 placeholder-gray-400"
                        required
                    />
                </div>

                {/* Description Textarea */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                    </label>
                    <textarea
                        name="description"
                        placeholder="Enter a detailed description of the project"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none bg-white text-gray-900 placeholder-gray-400"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 mt-6 shadow-md"
                >
                    {loading ? (
                    <span className="flex items-center justify-center">
                        Adding...
                    </span>
                    ) : (
                    'Add Project'
                    )}
                </button>

                {/* Message Alert */}
                {message && (
                    <div className={`mt-4 p-3 rounded-lg text-sm font-medium ${
                    message.includes('successfully') 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                    {message}
                    </div>
                )}
                </form>
            </div>  
        </div>
    );
};

export default AddProject;
