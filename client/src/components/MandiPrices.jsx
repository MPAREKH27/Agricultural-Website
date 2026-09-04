import React from 'react';
import { TrendingUp, TrendingDown, RefreshCw, DollarSign } from 'lucide-react';

export default function MandiPrices({ marketPrices = [] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 mb-4 border-b border-slate-100 gap-2">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Live Mandi Crop Prices</h3>
            <p className="text-xs text-slate-500">Updated hourly from official Agriculture Market Committees</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
          <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-600" />
          <span>Live Ticker Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {marketPrices.map((item, index) => {
          const isUp = item.trend === 'up';
          return (
            <div
              key={index}
              className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition-all hover:shadow-md"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-slate-700 truncate">{item.crop}</span>
                <span className={`inline-flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  isUp ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                }`}>
                  {isUp ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                  {item.change}
                </span>
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="text-xl font-extrabold text-slate-900">₹{item.modalPrice}</span>
                <span className="text-[10px] text-slate-400">/ Quintal</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1 truncate">{item.mandi}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
