import React from 'react';
import { Sprout, ShoppingBag, Wrench, BookOpen, Home, PlusCircle, Search, Sparkles, Database } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, searchQuery, setSearchQuery, onOpenModal }) {
  const navItems = [
    { id: 'home', label: 'Home Overview', icon: Home },
    { id: 'crops', label: 'Crops Catalog', icon: Sprout },
    { id: 'products', label: 'Marketplace', icon: ShoppingBag },
    { id: 'services', label: 'Farm Services', icon: Wrench },
    { id: 'resources', label: 'Farmer Resources', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      {/* Top Banner Status Bar */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-emerald-50 text-xs px-4 py-1.5 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1"></span>
            MongoDB Connected
          </span>
          <span className="hidden sm:inline">🌾 Farmer Support Helpline: 1800-180-1551 (Toll-Free)</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Kharif Season Advisory Live</span>
          <span className="text-emerald-300 font-medium">| Hindi / English</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 transform hover:rotate-6 transition-transform">
              <Sprout className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-extrabold text-2xl tracking-tight text-slate-900">Agri<span className="text-emerald-600">Smart</span></span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase">MERN</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Agricultural Data & Farmer Services</p>
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={`Search ${activeTab === 'home' ? 'crops, products & services...' : activeTab + '...'}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-emerald-500 rounded-xl text-sm transition-all focus:ring-2 focus:ring-emerald-500/20 outline-none"
            />
          </div>

          {/* Quick Action Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onOpenModal('crop')}
              className="hidden lg:flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add Record</span>
            </button>
          </div>

        </div>

        {/* Tab Navigation Menu */}
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto pb-3 pt-1 no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/70'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-emerald-600'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
