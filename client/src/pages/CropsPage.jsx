import React, { useState } from 'react';
import CropCard from '../components/CropCard';
import { Sprout, Filter, Plus, Search, Sparkles } from 'lucide-react';

export default function CropsPage({ crops = [], searchQuery, setSearchQuery, onAdd, onEdit, onDelete }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSeason, setSelectedSeason] = useState('All');

  const categories = ['All', 'Cereal', 'Pulse', 'Vegetable', 'Fruit', 'Cash Crop', 'Oilseed'];
  const seasons = ['All', 'Kharif', 'Rabi', 'Zaid', 'All Season'];

  const filteredCrops = crops.filter(crop => {
    const matchesCategory = selectedCategory === 'All' || crop.category === selectedCategory;
    const matchesSeason = selectedSeason === 'All' || crop.season === selectedSeason;
    const matchesSearch = !searchQuery || 
      crop.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      crop.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crop.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSeason && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Page Title & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-emerald-900 to-slate-900 p-8 rounded-3xl text-white shadow-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
            <Sprout className="w-4 h-4" />
            <span>MongoDB Crops Collection</span>
          </div>
          <h2 className="text-3xl font-extrabold">Agricultural Crop Advisory & Database</h2>
          <p className="text-slate-300 text-sm max-w-2xl">
            Browse season-wise crops, soil requirements, water necessity, expected yield per hectare, and current Mandi market price realizations.
          </p>
        </div>

        <button
          onClick={onAdd}
          className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center space-x-2 shrink-0 hover:scale-105"
        >
          <Plus className="w-5 h-5" />
          <span>Add New Crop</span>
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          
          {/* Category Filter Pills */}
          <div className="space-y-1.5 w-full lg:w-auto">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Filter by Category</span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Season Filter Pills */}
          <div className="space-y-1.5 w-full lg:w-auto">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Filter by Season</span>
            <div className="flex flex-wrap gap-1.5">
              {seasons.map((season) => (
                <button
                  key={season}
                  onClick={() => setSelectedSeason(season)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedSeason === season
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                  }`}
                >
                  {season}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex justify-between items-center text-xs text-slate-500 font-medium px-2">
        <span>Showing <strong className="text-slate-900">{filteredCrops.length}</strong> crop records</span>
        {(selectedCategory !== 'All' || selectedSeason !== 'All' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedSeason('All');
              setSearchQuery('');
            }}
            className="text-emerald-700 font-bold hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Crop Cards Grid */}
      {filteredCrops.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCrops.map((crop) => (
            <CropCard
              key={crop._id}
              crop={crop}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <Sprout className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">No Matching Crops Found</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            No agricultural crop matched your current category or search criteria. Try clearing filters or add a new crop record to MongoDB!
          </p>
          <button
            onClick={onAdd}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md"
          >
            + Create New Crop Record
          </button>
        </div>
      )}
    </div>
  );
}
