import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { Wrench, Plus, ShieldCheck, MapPin } from 'lucide-react';

export default function ServicesPage({ services = [], searchQuery, setSearchQuery, onAdd, onEdit, onDelete, onBook }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Soil Testing', 'Machinery Rental', 'Irrigation Setup', 'Drone Spraying', 'Harvesting', 'Expert Advisory'];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      (service.title || service.name || '').toLowerCase().includes(searchQuery.toLowerCase()) || 
      service.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-slate-900 via-emerald-950 to-teal-900 p-8 rounded-3xl text-white shadow-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Wrench className="w-4 h-4" />
            <span>MongoDB Services Hub</span>
          </div>
          <h2 className="text-3xl font-extrabold">Farm Machinery & Agricultural Services</h2>
          <p className="text-slate-300 text-sm max-w-2xl">
            Book heavy duty tractor plowing, precision drone spraying, combine harvesters, and soil lab testing with door-to-door delivery.
          </p>
        </div>

        <button
          onClick={onAdd}
          className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center space-x-2 shrink-0 hover:scale-105"
        >
          <Plus className="w-5 h-5" />
          <span>Add Service Listing</span>
        </button>
      </div>

      {/* Category Pills */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service._id}
              service={service}
              onEdit={onEdit}
              onDelete={onDelete}
              onBook={onBook}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto">
            <Wrench className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">No Services Found</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            No service provider matches the selected criteria. Add a new service listing or try clearing search queries.
          </p>
          <button
            onClick={onAdd}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md"
          >
            + Create Service Listing
          </button>
        </div>
      )}
    </div>
  );
}
