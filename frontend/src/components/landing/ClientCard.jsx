import React from 'react';

const ClientCard = ({ client }) => {
  return (
    <div className="relative mt-12 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-50 transition-transform duration-300 hover:-translate-y-2">
      
      <div className="absolute -top-12 w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden">
        <img 
          src={client.image} 
          alt={client.name} 
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-gray-500 text-sm leading-relaxed mt-10 mb-6 italic">
        "{client.description}"
      </p>

      <h3 className="text-[#1A73E8] font-bold text-lg">
        {client.name}
      </h3>

      <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">
        {client.designation}
      </p>
    </div>
  );
};

export default ClientCard;