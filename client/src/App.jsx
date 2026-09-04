import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CropsPage from './pages/CropsPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import ResourcesPage from './pages/ResourcesPage';

import CropModal from './components/CropModal';
import ProductModal from './components/ProductModal';
import ServiceModal from './components/ServiceModal';
import ResourceModal from './components/ResourceModal';

import * as api from './services/api';
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  // Data States
  const [crops, setCrops] = useState([]);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [resources, setResources] = useState([]);
  const [marketPrices, setMarketPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal States
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);

  const [productModalOpen, setProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const [resourceModalOpen, setResourceModalOpen] = useState(false);

  // Notification Toast State
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Initial Data Fetching from Express API
  const fetchData = async () => {
    setLoading(true);
    try {
      const [cropsRes, productsRes, servicesRes, resourcesRes, pricesRes] = await Promise.allSettled([
        api.getCrops(),
        api.getProducts(),
        api.getServices(),
        api.getResources(),
        api.getMarketPrices()
      ]);

      if (cropsRes.status === 'fulfilled') setCrops(cropsRes.value.data);
      if (productsRes.status === 'fulfilled') setProducts(productsRes.value.data);
      if (servicesRes.status === 'fulfilled') setServices(servicesRes.value.data);
      if (resourcesRes.status === 'fulfilled') setResources(resourcesRes.value.data);
      if (pricesRes.status === 'fulfilled') setMarketPrices(pricesRes.value.data);

    } catch (err) {
      console.error('Error fetching API data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // --- CROP CRUD HANDLERS ---
  const handleSaveCrop = async (cropData) => {
    try {
      if (selectedCrop && selectedCrop._id) {
        const res = await api.updateCrop(selectedCrop._id, cropData);
        setCrops(prev => prev.map(c => c._id === selectedCrop._id ? res.data : c));
        showToast('Agricultural crop record updated successfully!');
      } else {
        const res = await api.createCrop(cropData);
        setCrops(prev => [res.data, ...prev]);
        showToast('New crop record added to MongoDB!');
      }
      setCropModalOpen(false);
      setSelectedCrop(null);
    } catch (err) {
      showToast('Error saving crop record to MongoDB', 'error');
    }
  };

  const handleDeleteCrop = async (id) => {
    if (!window.confirm('Are you sure you want to delete this crop record from database?')) return;
    try {
      await api.deleteCrop(id);
      setCrops(prev => prev.filter(c => c._id !== id));
      showToast('Crop record deleted successfully');
    } catch (err) {
      showToast('Failed to delete crop record', 'error');
    }
  };

  // --- PRODUCT CRUD HANDLERS ---
  const handleSaveProduct = async (productData) => {
    try {
      if (selectedProduct && selectedProduct._id) {
        const res = await api.updateProduct(selectedProduct._id, productData);
        setProducts(prev => prev.map(p => p._id === selectedProduct._id ? res.data : p));
        showToast('Product listing updated successfully!');
      } else {
        const res = await api.createProduct(productData);
        setProducts(prev => [res.data, ...prev]);
        showToast('New farming product added to marketplace!');
      }
      setProductModalOpen(false);
      setSelectedProduct(null);
    } catch (err) {
      showToast('Error saving product to MongoDB', 'error');
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm('Delete this product from marketplace?')) return;
    try {
      await api.deleteProduct(id);
      setProducts(prev => prev.filter(p => p._id !== id));
      showToast('Product removed from marketplace');
    } catch (err) {
      showToast('Failed to delete product', 'error');
    }
  };

  const handleBuyProduct = (product) => {
    showToast(`Order request placed for "${product.name}"! Vendor: ${product.vendor}`, 'info');
  };

  // --- SERVICE CRUD HANDLERS ---
  const handleSaveService = async (serviceData) => {
    try {
      if (selectedService && selectedService._id) {
        const res = await api.updateService(selectedService._id, serviceData);
        setServices(prev => prev.map(s => s._id === selectedService._id ? res.data : s));
        showToast('Service listing updated successfully!');
      } else {
        const res = await api.createService(serviceData);
        setServices(prev => [res.data, ...prev]);
        showToast('New farm service listed!');
      }
      setServiceModalOpen(false);
      setSelectedService(null);
    } catch (err) {
      showToast('Error saving service listing', 'error');
    }
  };

  const handleDeleteService = async (id) => {
    if (!window.confirm('Delete this service listing?')) return;
    try {
      await api.deleteService(id);
      setServices(prev => prev.filter(s => s._id !== id));
      showToast('Service listing removed');
    } catch (err) {
      showToast('Failed to delete service', 'error');
    }
  };

  const handleBookService = (service) => {
    showToast(`Booking inquiry sent for "${service.title || service.name}". Provider will call ${service.contactPhone}`, 'info');
  };

  // --- RESOURCE CRUD HANDLERS ---
  const handleSaveResource = async (resourceData) => {
    try {
      const res = await api.createResource(resourceData);
      setResources(prev => [res.data, ...prev]);
      showToast('New scheme resource published!');
      setResourceModalOpen(false);
    } catch (err) {
      showToast('Error publishing resource', 'error');
    }
  };

  const handleDeleteResource = async (id) => {
    if (!window.confirm('Remove this resource item?')) return;
    try {
      await api.deleteResource(id);
      setResources(prev => prev.filter(r => r._id !== id));
      showToast('Resource item deleted');
    } catch (err) {
      showToast('Failed to delete resource', 'error');
    }
  };

  // Open Modal Helpers
  const handleOpenModal = (type, data = null) => {
    if (type === 'crop') {
      setSelectedCrop(data);
      setCropModalOpen(true);
    } else if (type === 'product') {
      setSelectedProduct(data);
      setProductModalOpen(true);
    } else if (type === 'service') {
      setSelectedService(data);
      setServiceModalOpen(true);
    } else if (type === 'resource') {
      setResourceModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenModal={(type) => handleOpenModal(type)}
      />

      {/* Main Page View Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Toast Notification Popup */}
        {toast && (
          <div className={`fixed top-24 right-6 z-50 flex items-center space-x-3 px-5 py-3.5 rounded-2xl shadow-2xl border backdrop-blur-md transition-all animate-bounce ${
            toast.type === 'error'
              ? 'bg-rose-950/90 text-rose-200 border-rose-800'
              : toast.type === 'info'
              ? 'bg-slate-900/95 text-emerald-300 border-emerald-500/50'
              : 'bg-emerald-950/95 text-emerald-100 border-emerald-600'
          }`}>
            {toast.type === 'error' ? <AlertCircle className="w-5 h-5 text-rose-400" /> : <CheckCircle className="w-5 h-5 text-emerald-400" />}
            <span className="text-xs font-bold">{toast.message}</span>
            <button onClick={() => setToast(null)} className="ml-2 text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Tab Routing */}
        {activeTab === 'home' && (
          <Home
            crops={crops}
            products={products}
            services={services}
            resources={resources}
            marketPrices={marketPrices}
            onNavigate={setActiveTab}
            onOpenModal={handleOpenModal}
            onEditCrop={(crop) => handleOpenModal('crop', crop)}
            onDeleteCrop={handleDeleteCrop}
            onEditProduct={(prod) => handleOpenModal('product', prod)}
            onDeleteProduct={handleDeleteProduct}
            onBuyProduct={handleBuyProduct}
            onEditService={(serv) => handleOpenModal('service', serv)}
            onDeleteService={handleDeleteService}
            onBookService={handleBookService}
            onDeleteResource={handleDeleteResource}
          />
        )}

        {activeTab === 'crops' && (
          <CropsPage
            crops={crops}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onAdd={() => handleOpenModal('crop')}
            onEdit={(crop) => handleOpenModal('crop', crop)}
            onDelete={handleDeleteCrop}
          />
        )}

        {activeTab === 'products' && (
          <ProductsPage
            products={products}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onAdd={() => handleOpenModal('product')}
            onEdit={(prod) => handleOpenModal('product', prod)}
            onDelete={handleDeleteProduct}
            onBuy={handleBuyProduct}
          />
        )}

        {activeTab === 'services' && (
          <ServicesPage
            services={services}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onAdd={() => handleOpenModal('service')}
            onEdit={(serv) => handleOpenModal('service', serv)}
            onDelete={handleDeleteService}
            onBook={handleBookService}
          />
        )}

        {activeTab === 'resources' && (
          <ResourcesPage
            resources={resources}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onAdd={() => handleOpenModal('resource')}
            onDelete={handleDeleteResource}
          />
        )}

      </main>

      {/* CRUD Modals */}
      <CropModal
        isOpen={cropModalOpen}
        onClose={() => { setCropModalOpen(false); setSelectedCrop(null); }}
        onSave={handleSaveCrop}
        initialData={selectedCrop}
      />

      <ProductModal
        isOpen={productModalOpen}
        onClose={() => { setProductModalOpen(false); setSelectedProduct(null); }}
        onSave={handleSaveProduct}
        initialData={selectedProduct}
      />

      <ServiceModal
        isOpen={serviceModalOpen}
        onClose={() => { setServiceModalOpen(false); setSelectedService(null); }}
        onSave={handleSaveService}
        initialData={selectedService}
      />

      <ResourceModal
        isOpen={resourceModalOpen}
        onClose={() => setResourceModalOpen(false)}
        onSave={handleSaveResource}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
