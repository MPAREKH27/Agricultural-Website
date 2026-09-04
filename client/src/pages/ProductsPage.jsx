import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { ShoppingBag, Plus, Leaf, Sparkles } from 'lucide-react';

export default function ProductsPage({ products = [], searchQuery, setSearchQuery, onAdd, onEdit, onDelete, onBuy }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [organicOnly, setOrganicOnly] = useState(false);

  const categories = ['All', 'Seeds', 'Fertilizers', 'Pesticides', 'Tools & Machinery', 'Irrigation', 'Bio-Stimulants'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesOrganic = !organicOnly || product.isOrganic;
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesOrganic && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-teal-900 via-emerald-900 to-slate-900 p-8 rounded-3xl text-white shadow-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-teal-300 uppercase tracking-widest">
            <ShoppingBag className="w-4 h-4" />
            <span>MongoDB Products Store</span>
          </div>
          <h2 className="text-3xl font-extrabold">Farming Products & Supplies Marketplace</h2>
          <p className="text-slate-300 text-sm max-w-2xl">
            Source bio-organic fertilizers, certified hybrid seeds, drip irrigation equipment, and organic pesticides directly from verified suppliers.
          </p>
        </div>

        <button
          onClick={onAdd}
          className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center space-x-2 shrink-0 hover:scale-105"
        >
          <Plus className="w-5 h-5" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        
        {/* Categories */}
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

        {/* Organic Toggle */}
        <button
          onClick={() => setOrganicOnly(!organicOnly)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
            organicOnly
              ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-sm'
              : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
          }`}
        >
          <Leaf className={`w-4 h-4 ${organicOnly ? 'text-emerald-600' : 'text-slate-400'}`} />
          <span>Certified Organic Only</span>
        </button>

      </div>

      {/* Count */}
      <div className="flex justify-between items-center text-xs text-slate-500 font-medium px-2">
        <span>Available items in store: <strong className="text-slate-900">{filteredProducts.length}</strong></span>
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onEdit={onEdit}
              onDelete={onDelete}
              onBuy={onBuy}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">No Products Found</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            No product matching your selected filter was found. Try selecting another category or add a new product item.
          </p>
          <button
            onClick={onAdd}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md"
          >
            + List New Farming Product
          </button>
        </div>
      )}
    </div>
  );
}
