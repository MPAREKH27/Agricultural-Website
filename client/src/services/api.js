import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCrops = (params) => api.get('/crops', { params });
export const getCropById = (id) => api.get(`/crops/${id}`);
export const createCrop = (data) => api.post('/crops', data);
export const updateCrop = (id, data) => api.put(`/crops/${id}`, data);
export const deleteCrop = (id) => api.delete(`/crops/${id}`);

export const getProducts = (params) => api.get('/products', { params });
export const createProduct = (data) => api.post('/products', data);
export const updateProduct = (id, data) => api.put(`/products/${id}`, data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

export const getServices = (params) => api.get('/services', { params });
export const createService = (data) => api.post('/services', data);
export const updateService = (id, data) => api.put(`/services/${id}`, data);
export const deleteService = (id) => api.delete(`/services/${id}`);

export const getResources = (params) => api.get('/resources', { params });
export const createResource = (data) => api.post('/resources', data);
export const deleteResource = (id) => api.delete(`/resources/${id}`);
export const getMarketPrices = () => api.get('/resources/market-prices');

export default api;
