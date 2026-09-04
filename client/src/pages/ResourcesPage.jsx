import React, { useState } from 'react';
import ResourceCard from '../components/ResourceCard';
import { BookOpen, Plus, PhoneCall, ShieldCheck, FileCheck, HelpCircle } from 'lucide-react';

export default function ResourcesPage({ resources = [], searchQuery, setSearchQuery, onAdd, onDelete }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Government Scheme', 'Farming Guide', 'Weather Advisory', 'Subsidy News', 'Organic Methods'];

  const filteredResources = resources.filter(res => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      res.summary.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 p-8 rounded-3xl text-white shadow-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
            <BookOpen className="w-4 h-4" />
            <span>Government Schemes & Advisory</span>
          </div>
          <h2 className="text-3xl font-extrabold">Farmer Welfare Resources & Schemes</h2>
          <p className="text-slate-300 text-sm max-w-2xl">
            Access verified guidelines for PM-Kisan Samman Nidhi, drone equipment subsidies, soil health card portal, and organic pest control manuals.
          </p>
        </div>

        <button
          onClick={onAdd}
          className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center space-x-2 shrink-0 hover:scale-105"
        >
          <Plus className="w-5 h-5" />
          <span>Add Resource</span>
        </button>
      </div>

      {/* Emergency Helpline Banner */}
      <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold shrink-0">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-extrabold text-slate-900">National Farmer Helpline (Kisan Call Center)</h4>
            <p className="text-xs text-slate-600">Dial toll-free 1800-180-1551 for free agricultural scientist advice in your regional language (6 AM to 10 PM daily).</p>
          </div>
        </div>
        <a
          href="tel:18001801551"
          className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-md shrink-0"
        >
          Call 1800-180-1551
        </a>
      </div>

      {/* Category Tabs */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((res) => (
            <ResourceCard
              key={res._id}
              resource={res}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
            <BookOpen className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">No Resources Found</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            No government scheme or guide was found for this filter. Click below to publish a new resource entry.
          </p>
          <button
            onClick={onAdd}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md"
          >
            + Add Scheme / Guide Entry
          </button>
        </div>
      )}
    </div>
  );
}
