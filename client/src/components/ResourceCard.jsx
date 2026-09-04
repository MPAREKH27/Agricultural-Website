import React from 'react';
import { BookOpen, ExternalLink, Calendar, Trash2, Award, FileText } from 'lucide-react';

export default function ResourceCard({ resource, onDelete }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-4">
        
        {/* Header Badges */}
        <div className="flex justify-between items-center">
          <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
            {resource.category}
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-[11px] text-slate-400 flex items-center">
              <Calendar className="w-3 h-3 mr-1" /> {resource.publishDate}
            </span>
            {onDelete && (
              <button
                onClick={() => onDelete(resource._id)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                title="Delete Resource"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
          {resource.title}
        </h3>

        {/* Publisher */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
          <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>Published by {resource.publisher}</span>
        </div>

        {/* Summary */}
        <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
          {resource.summary}
        </p>

        {/* Content */}
        <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
          {resource.content}
        </p>

      </div>

      {/* Action Footer */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex justify-between items-center text-xs">
        <span className="text-emerald-700 font-bold flex items-center">
          <FileText className="w-3.5 h-3.5 mr-1" /> Verified Advisory
        </span>
        <a
          href={resource.linkUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1 text-slate-900 font-bold hover:text-emerald-600 transition-colors"
        >
          <span>Read Details</span>
          <ExternalLink className="w-3.5 h-3.5 ml-1" />
        </a>
      </div>
    </div>
  );
}
