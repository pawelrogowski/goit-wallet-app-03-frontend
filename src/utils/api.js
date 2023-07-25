import axios from 'axios';

const WalletInstance = axios.create();

WalletInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export const API_URL = 'https://wallet-lzvg.onrender.com/api';

export const setAuthToken = token => {
  WalletInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const registerUser = async userData => {
  const response = await WalletInstance.post(`${API_URL}/users/register`, userData);
  return response.data;
};

export const loginUser = async loginData => {
  const response = await WalletInstance.post(`${API_URL}/users/login`, loginData);
  return response.data;
};

export const getUserProfile = async () => {
  const response = await WalletInstance.get(`${API_URL}/users/profile`);
  return response.data;
};

export const logoutUser = async () => {
  await WalletInstance.get(`${API_URL}/users/logout`);
};

export const createTransaction = async transactionData => {
  const response = await WalletInstance.post(`${API_URL}/transactions`, transactionData);
  return response.data;
};

export const getTransactions = async () => {
  const response = await WalletInstance.get(`${API_URL}/transactions`);
  return response.data;
};

export const deleteTransaction = async transactionId => {
  const response = await WalletInstance.delete(`${API_URL}/transactions/${transactionId}`);
  return response.data;
};

export const updateTransaction = async (transactionId, updatedData) => {
  const response = await WalletInstance.patch(
    `${API_URL}/transactions/${transactionId}`,
    updatedData
  );
  return response.data;
};

export const filterTransactions = async (month, year) => {
  const response = await WalletInstance.get(`${API_URL}/transactions/${month}/${year}`);
  return response.data;
};

export const getCategoryTotals = async () => {
  const response = await WalletInstance.get(`${API_URL}/transactions/categories/totals`);
  return response.data;
};

export const getMonthlyCategoryTotals = async (month, year) => {
  const response = await WalletInstance.get(`${API_URL}/transactions/categories/${month}/${year}`);
  return response.data;
};
