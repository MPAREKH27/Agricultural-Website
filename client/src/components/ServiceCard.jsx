import React from 'react';
import { Wrench, Phone, MapPin, Star, Edit2, Trash2, CalendarCheck, ShieldCheck } from 'lucide-react';

export default function ServiceCard({ service, onEdit, onDelete, onBook }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between">
      <div>
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <img
            src={service.imageUrl || 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80'}
            alt={service.title || service.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

          <div className="absolute top-3 left-3">
            <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-md shadow-sm">
              {service.category}
            </span>
          </div>

          <div className="absolute top-3 right-3 flex space-x-1">
            <button
              onClick={() => onEdit(service)}
              className="p-2 rounded-xl bg-white/90 hover:bg-white text-slate-700 hover:text-emerald-600 shadow-md backdrop-blur-md"
            >
              <Edit2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onDelete(service._id)}
              className="p-2 rounded-xl bg-white/90 hover:bg-white text-slate-700 hover:text-rose-600 shadow-md backdrop-blur-md"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white">
            <div>
              <span className="text-xs text-emerald-300 font-semibold">{service.provider}</span>
              <h3 className="text-base font-bold drop-shadow-md leading-tight">{service.title || service.name}</h3>
            </div>
            <div className="flex items-center space-x-1 text-amber-300 text-xs font-bold shrink-0">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>{service.rating || '4.9'}</span>
            </div>
          </div>
        </div>

        <div className="p-5 space-y-3">
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{service.description}</p>
          
          <div className="space-y-2 text-xs pt-1">
            <div className="flex items-center text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-slate-400 mr-2 shrink-0" />
              <span className="truncate">{service.location}</span>
            </div>
            <div className="flex items-center text-slate-600">
              <Phone className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
              <span className="font-semibold text-slate-800">{service.contactPhone}</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-slate-100">
            <div>
              <span className="text-2xl font-extrabold text-slate-900">₹{service.pricePerDay}</span>
              <span className="text-xs text-slate-400 font-medium"> / Day or Unit</span>
            </div>
            <span className="bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
              {service.availability || 'Available'}
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-50 border-t border-slate-100">
        <button
          onClick={() => onBook(service)}
          className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all flex items-center justify-center space-x-2 shadow-md"
        >
          <CalendarCheck className="w-4 h-4 text-emerald-400" />
          <span>Book Service Slot</span>
        </button>
      </div>
    </div>
  );
}
