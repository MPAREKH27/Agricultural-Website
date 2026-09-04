import React from 'react';
import { Droplets, Calendar, ShieldAlert, Edit2, Trash2, ChevronRight, MapPin, Award } from 'lucide-react';

export default function CropCard({ crop, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between">
      <div>
        {/* Card Header & Image */}
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <img
            src={crop.imageUrl || 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80'}
            alt={crop.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          
          {/* Season Badge */}
          <div className="absolute top-3 left-3 flex space-x-1.5">
            <span className="bg-emerald-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-md shadow-sm">
              {crop.season} Season
            </span>
            <span className="bg-slate-900/80 text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-md">
              {crop.category}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex space-x-1 opacity-90 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(crop)}
              title="Edit Crop Record"
              className="p-2 rounded-xl bg-white/90 hover:bg-white text-slate-700 hover:text-emerald-600 shadow-md transition-colors backdrop-blur-md"
            >
              <Edit2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onDelete(crop._id)}
              title="Delete Crop Record"
              className="p-2 rounded-xl bg-white/90 hover:bg-white text-slate-700 hover:text-rose-600 shadow-md transition-colors backdrop-blur-md"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Market Price Overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white">
            <div>
              <h3 className="text-lg font-bold drop-shadow-md">{crop.name}</h3>
              <p className="text-xs text-slate-300 italic">{crop.scientificName}</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-emerald-300 font-medium">Mandi Price</span>
              <div className="text-base font-extrabold text-white">₹{crop.marketPrice} <span className="text-[10px]">/Qtl</span></div>
            </div>
          </div>
        </div>

        {/* Card Body Metrics */}
        <div className="p-5 space-y-4">
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {crop.description}
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <div className="text-slate-400 font-medium text-[10px] uppercase">Soil Required</div>
              <div className="font-bold text-slate-800 truncate mt-0.5">{crop.soilType}</div>
            </div>

            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <div className="text-slate-400 font-medium text-[10px] uppercase flex items-center">
                <Droplets className="w-3 h-3 text-blue-500 mr-1" /> Water
              </div>
              <div className="font-bold text-slate-800 truncate mt-0.5">{crop.waterRequirement}</div>
            </div>

            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <div className="text-slate-400 font-medium text-[10px] uppercase flex items-center">
                <Calendar className="w-3 h-3 text-amber-500 mr-1" /> Duration
              </div>
              <div className="font-bold text-slate-800 truncate mt-0.5">{crop.duration}</div>
            </div>

            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <div className="text-slate-400 font-medium text-[10px] uppercase flex items-center">
                <Award className="w-3 h-3 text-emerald-500 mr-1" /> Expected Yield
              </div>
              <div className="font-bold text-slate-800 truncate mt-0.5">{crop.expectedYield}</div>
            </div>
          </div>

          {/* Pest Alerts */}
          {crop.pestAlerts && crop.pestAlerts.length > 0 && (
            <div className="bg-amber-50 border border-amber-200/70 p-2.5 rounded-xl flex items-start space-x-2 text-xs">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-amber-900">Pest Alert: </span>
                <span className="text-amber-800">{crop.pestAlerts.join(', ')}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-xs">
        <span className="text-slate-500 flex items-center">
          <MapPin className="w-3.5 h-3.5 text-slate-400 mr-1" /> {crop.suitableRegion || 'Pan India'}
        </span>
        <button
          onClick={() => onEdit(crop)}
          className="text-emerald-700 font-bold hover:text-emerald-800 flex items-center space-x-1"
        >
          <span>Edit Specs</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
