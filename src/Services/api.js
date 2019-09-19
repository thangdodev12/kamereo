import api from '../Utils/api';

export const updateStoreService = (body) => api.post('/update-store', body);
export const getStoresService = () => api.get('/get-stores');