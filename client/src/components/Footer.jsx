import React from 'react';
import { Sprout, Phone, Mail, MapPin, ShieldCheck, Heart, Database, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl text-white">Agri<span className="text-emerald-400">Smart</span></span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering farmers and agriculture stakeholders with data-driven crop management, transparent seed-to-market prices, equipment services, and government resource access.
            </p>
            <div className="flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-3 py-2 rounded-lg">
              <Database className="w-4 h-4" />
              <span>MongoDB Mongoose API Engine Active</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Core Platform Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#crops" className="hover:text-emerald-400 transition-colors flex items-center">Crop Knowledge Engine <ArrowUpRight className="w-3 h-3 ml-1" /></a></li>
              <li><a href="#marketplace" className="hover:text-emerald-400 transition-colors flex items-center">Seeds & Fertilizer Store <ArrowUpRight className="w-3 h-3 ml-1" /></a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors flex items-center">Tractor & Drone Rental <ArrowUpRight className="w-3 h-3 ml-1" /></a></li>
              <li><a href="#mandi" className="hover:text-emerald-400 transition-colors flex items-center">Real-Time Mandi Prices <ArrowUpRight className="w-3 h-3 ml-1" /></a></li>
              <li><a href="#resources" className="hover:text-emerald-400 transition-colors flex items-center">PM-Kisan Scheme Guidelines <ArrowUpRight className="w-3 h-3 ml-1" /></a></li>
            </ul>
          </div>

          {/* Helplines */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Farmer Support Desk</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400">Kisan Call Center (Toll-Free)</div>
                  <div className="text-white font-semibold">1800-180-1551</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400">Email Support</div>
                  <div className="text-white font-semibold">support@agrismart.org</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400">HQ Office</div>
                  <div className="text-white">Krishi Bhavan, New Delhi, India</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter / Tech Stack */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Built With Technology</h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-800 text-slate-300 px-2.5 py-1.5 rounded-md border border-slate-700">React 18</span>
              <span className="bg-slate-800 text-slate-300 px-2.5 py-1.5 rounded-md border border-slate-700">Tailwind CSS</span>
              <span className="bg-slate-800 text-slate-300 px-2.5 py-1.5 rounded-md border border-slate-700">Node.js</span>
              <span className="bg-slate-800 text-slate-300 px-2.5 py-1.5 rounded-md border border-slate-700">Express.js</span>
              <span className="bg-emerald-900/60 text-emerald-300 px-2.5 py-1.5 rounded-md border border-emerald-700">MongoDB</span>
              <span className="bg-slate-800 text-slate-300 px-2.5 py-1.5 rounded-md border border-slate-700">REST APIs</span>
            </div>
            <p className="text-xs text-slate-400 mt-4 leading-relaxed">
              Full-stack CRUD implementation featuring live MongoDB Mongoose data persistence and modern responsive agricultural design.
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400">
          <p>© 2026 AgriSmart Portal. Developed for Indian Agriculture & Farmer Empowerment.</p>
          <div className="flex items-center space-x-1 mt-4 sm:mt-0">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>using React.js & MongoDB</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
