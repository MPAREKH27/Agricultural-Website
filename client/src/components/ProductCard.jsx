import React from 'react';
import { Star, ShoppingCart, Leaf, Edit2, Trash2, CheckCircle } from 'lucide-react';

export default function ProductCard({ product, onEdit, onDelete, onBuy }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between">
      <div>
        {/* Product Image Header */}
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <img
            src={product.imageUrl || 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80'}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="bg-slate-900/80 text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-md">
              {product.category}
            </span>
            {product.isOrganic && (
              <span className="bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center shadow-sm">
                <Leaf className="w-3 h-3 mr-1" /> Organic
              </span>
            )}
          </div>

          {/* Edit/Delete Actions */}
          <div className="absolute top-3 right-3 flex space-x-1">
            <button
              onClick={() => onEdit(product)}
              className="p-2 rounded-xl bg-white/90 hover:bg-white text-slate-700 hover:text-emerald-600 shadow-md backdrop-blur-md"
            >
              <Edit2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onDelete(product._id)}
              className="p-2 rounded-xl bg-white/90 hover:bg-white text-slate-700 hover:text-rose-600 shadow-md backdrop-blur-md"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white">
            <div className="flex items-center space-x-1 text-amber-300 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>{product.rating || '4.8'}</span>
            </div>
            <span className="text-xs text-slate-300">By {product.vendor}</span>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-5 space-y-3">
          <h3 className="text-base font-extrabold text-slate-900 line-clamp-1">{product.name}</h3>
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{product.description}</p>
          
          <div className="flex justify-between items-center pt-2">
            <div>
              <span className="text-2xl font-extrabold text-slate-900">₹{product.price}</span>
              <span className="text-xs text-slate-400 font-medium"> / {product.unit}</span>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                <CheckCircle className="w-3 h-3 mr-1 text-emerald-600" /> {product.stock} In Stock
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Button */}
      <div className="p-4 bg-slate-50 border-t border-slate-100">
        <button
          onClick={() => onBuy(product)}
          className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/20"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Order Product</span>
        </button>
      </div>
    </div>
  );
}
