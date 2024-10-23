
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://retoolapi.dev/D6xLg4/data',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getUsers(params) {
    return apiClient.get('/', { params });
  },
  getUser(id) {
    return apiClient.get(`/${id}`);
  },
  createUser(data) {
    return apiClient.post('/', data);
  },
  updateUser(id, data) {
    return apiClient.put(`/${id}`, data);
  },
  patchUser(id, data) {
    return apiClient.patch(`/${id}`, data);
  },
  deleteUser(id) {
    return apiClient.delete(`/${id}`);
  },
};
    