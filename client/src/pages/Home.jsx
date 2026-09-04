import React from 'react';
import Hero from '../components/Hero';
import MandiPrices from '../components/MandiPrices';
import CropCard from '../components/CropCard';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';
import ResourceCard from '../components/ResourceCard';
import { Sprout, ShoppingBag, Wrench, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

export default function Home({
  crops = [],
  products = [],
  services = [],
  resources = [],
  marketPrices = [],
  onNavigate,
  onOpenModal,
  onEditCrop,
  onDeleteCrop,
  onEditProduct,
  onDeleteProduct,
  onBuyProduct,
  onEditService,
  onDeleteService,
  onBookService,
  onDeleteResource
}) {
  const featuredCrops = crops.slice(0, 3);
  const featuredProducts = products.slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const featuredResources = resources.slice(0, 2);

  const stats = {
    cropCount: crops.length,
    productCount: products.length,
    serviceCount: services.length
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <Hero
        stats={stats}
        onNavigate={onNavigate}
        onAddRecord={(type) => onOpenModal(type)}
      />

      {/* Live Mandi Prices */}
      <MandiPrices marketPrices={marketPrices} />

      {/* Featured Crops Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-2 border-b border-slate-200">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600 uppercase tracking-widest">
              <Sprout className="w-4 h-4" />
              <span>Crop Advisory Engine</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Featured Agricultural Crops</h2>
          </div>
          <button
            onClick={() => onNavigate('crops')}
            className="mt-2 sm:mt-0 text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
          >
            <span>View All {crops.length} Crops</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCrops.map((crop) => (
            <CropCard
              key={crop._id}
              crop={crop}
              onEdit={onEditCrop}
              onDelete={onDeleteCrop}
            />
          ))}
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-2 border-b border-slate-200">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-teal-600 uppercase tracking-widest">
              <ShoppingBag className="w-4 h-4" />
              <span>Farming Marketplace</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Organic Inputs & Hybrid Seeds</h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="mt-2 sm:mt-0 text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
          >
            <span>Explore Marketplace</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onEdit={onEditProduct}
              onDelete={onDeleteProduct}
              onBuy={onBuyProduct}
            />
          ))}
        </div>
      </section>

      {/* Farm Services Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-2 border-b border-slate-200">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-600 uppercase tracking-widest">
              <Wrench className="w-4 h-4" />
              <span>Equipment & Drones</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Agricultural Machinery & Services</h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="mt-2 sm:mt-0 text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service._id}
              service={service}
              onEdit={onEditService}
              onDelete={onDeleteService}
              onBook={onBookService}
            />
          ))}
        </div>
      </section>

      {/* Government Schemes & Resources */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-2 border-b border-slate-200">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600 uppercase tracking-widest">
              <BookOpen className="w-4 h-4" />
              <span>Farmer Schemes & Guides</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Government Welfare & Advisory</h2>
          </div>
          <button
            onClick={() => onNavigate('resources')}
            className="mt-2 sm:mt-0 text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
          >
            <span>Read All Schemes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredResources.map((res) => (
            <ResourceCard
              key={res._id}
              resource={res}
              onDelete={onDeleteResource}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
