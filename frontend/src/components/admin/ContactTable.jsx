import { useState, useEffect } from 'react';
import API from '../../services/api.js';

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await API.get('/contact');
      console.log('API Response:', res.data); 
      
      // Handle different response structures
      let contactsData = [];
      if (Array.isArray(res.data)) {
        contactsData = res.data;
      } else if (res.data.data && Array.isArray(res.data.data)) {
        contactsData = res.data.data;
      } else if (res.data.users && Array.isArray(res.data.users)) {
        contactsData = res.data.users;
      } else if (res.data.contacts && Array.isArray(res.data.contacts)) {
        contactsData = res.data.contacts;
      }
      
      setContacts(contactsData);
    } catch (error) {
      console.error('Failed to load contacts:', error);
      setContacts([]);
    } finally {
      setLoading(false);
    }
  };



  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600 font-medium">Loading contacts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Contact Leads</h1>
          <p className="text-gray-600 mt-2">Total: {contacts.length} responses</p>
        </div>

        {/* Table */}
        {contacts.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600">No contacts yet</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Full Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Mobile</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">City</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact, index) => (
                    <tr key={contact._id} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition`}>
                      <td className="px-6 py-4 text-gray-900 font-medium">{contact.fullName}</td>
                      <td className="px-6 py-4 text-gray-700">{contact.email}</td>
                      <td className="px-6 py-4 text-gray-700">{contact.mobileNumber}</td>
                      <td className="px-6 py-4 text-gray-700">{contact.city}</td>
                      <td className="px-6 py-4 text-gray-700 text-sm">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactTable;
