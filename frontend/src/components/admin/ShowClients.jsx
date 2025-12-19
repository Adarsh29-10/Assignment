import React from "react";
import ClientsSection from "../sections/ClientsSection";

const ShowClients = () => {
    return (
        <div className="px-20 py-10">
            <h2 className="font-bold text-4xl mb-10">Clients</h2>
            <ClientsSection />
        </div>
    );
};

export default ShowClients;