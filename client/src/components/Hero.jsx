import React from 'react';
import { Sprout, ShoppingBag, Wrench, Sun, CloudRain, Thermometer, TrendingUp, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onNavigate, onAddRecord, stats }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl mb-12 shadow-2xl border border-emerald-900/50">
      
      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Text Content */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide">
            <Sparkles className="w-4 h-4" />
            <span>Next-Gen Agricultural Web Platform</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
            Smart Crop Insights & <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">Farmer Market Hub</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Manage agricultural crops data, order organic fertilizers and hybrid seeds, book local farm machinery services, and track real-time Mandi crop prices using our MongoDB powered platform.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => onNavigate('crops')}
              className="flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95"
            >
              <Sprout className="w-5 h-5" />
              <span>Explore Crop Advisory</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => onNavigate('products')}
              className="flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:border-emerald-500/50 transition-all hover:scale-105"
            >
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              <span>Farming Marketplace</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
            <div>
              <div className="text-2xl lg:text-3xl font-extrabold text-white">{stats.cropCount || '25+'}</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Crop Varieties</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-extrabold text-emerald-400">{stats.productCount || '40+'}</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Agri Products</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-extrabold text-amber-400">{stats.serviceCount || '15+'}</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Services & Drones</div>
            </div>
          </div>

        </div>

        {/* Right Column: Live Weather & Mandi Summary Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-dark rounded-3xl p-6 border border-slate-700/80 shadow-2xl relative">
            
            {/* Header */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-700/60">
              <div className="flex items-center space-x-2">
                <Sun className="w-6 h-6 text-amber-400 animate-spin-slow" />
                <div>
                  <h3 className="text-sm font-bold text-white">Live Farm Weather Advisory</h3>
                  <p className="text-xs text-slate-400">Ludhiana Agro Zone • Kharif Season</p>
                </div>
              </div>
              <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                Optimal Irrigation
              </span>
            </div>

            {/* Weather Metrics */}
            <div className="grid grid-cols-3 gap-3 my-5 text-center">
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <Thermometer className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-white">31°C</div>
                <div className="text-[10px] text-slate-400 uppercase">Temp</div>
              </div>

              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <CloudRain className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-white">68%</div>
                <div className="text-[10px] text-slate-400 uppercase">Humidity</div>
              </div>

              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <TrendingUp className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-emerald-400">Normal</div>
                <div className="text-[10px] text-slate-400 uppercase">Rain Status</div>
              </div>
            </div>

            {/* Quick Mandi Snippet */}
            <div className="bg-gradient-to-r from-emerald-950 to-slate-900 p-4 rounded-2xl border border-emerald-800/40">
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-slate-300 font-medium">🌾 Live Mandi Rate (Sharbati Wheat)</span>
                <span className="text-emerald-400 font-bold">₹2,480 / Qtl</span>
              </div>
              <p className="text-[11px] text-slate-400">Up +₹30 per quintal in Khanna Mandi today.</p>
            </div>

            {/* CTA inside Widget */}
            <button
              onClick={() => onAddRecord('crop')}
              className="w-full mt-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>+ Add New Agricultural Record</span>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
