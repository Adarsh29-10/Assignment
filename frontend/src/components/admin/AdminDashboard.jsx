import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FolderIcon,
  UsersIcon,
  InboxIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: 'Projects',
      description: 'Manage real estate projects.',
      icon: <FolderIcon className="w-7 h-7 text-blue-600" />,
      addRoute: '/admin/projects/add',
      viewRoute: '/admin/projects/view'
    },
    {
      title: 'Clients',
      description: 'Manage client testimonials.',
      icon: <UsersIcon className="w-7 h-7 text-purple-600" />,
      addRoute: '/admin/clients/add',
      viewRoute: '/admin/clients/view'
    },
    {
      title: 'Contacts',
      description: 'View contact form submissions.',
      icon: <InboxIcon className="w-7 h-7 text-orange-600" />,
      viewRoute: '/admin/contacts'
    },
    {
      title: 'Newsletter',
      description: 'View newsletter subscribers.',
      icon: <EnvelopeIcon className="w-7 h-7 text-green-600" />,
      viewRoute: '/admin/newsletter'
    }
  ];

  return (
    <div className="w-full px-4 sm:px-8 lg:px-12 py-8">
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Manage website content and user data
        </p>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              {item.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              {item.addRoute && (
                <button
                  onClick={() => navigate(item.addRoute)}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Add
                </button>
              )}

              <button
                onClick={() => navigate(item.viewRoute)}
                className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100 transition"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
