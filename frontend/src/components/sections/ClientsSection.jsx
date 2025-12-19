import { useEffect, useState } from 'react';
import API from '../../services/api'
import ClientCard from '../landing/ClientCard';

const ClientsSection = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await API.get('/client');
        setClients(res.data.clients);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <section className="py-16 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {clients.map(client => (
          <ClientCard key={client._id} client={client} />
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
