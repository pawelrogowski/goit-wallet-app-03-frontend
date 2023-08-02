import axios from 'axios';
import { setAuthToken } from './authUtils';
import Cookies from 'js-cookie';
import { WalletInstance } from './authUtils';
export const API_URL = 'https://wallet-lzvg.onrender.com/api';
setAuthToken();

export const registerUser = async userData => {
  const response = await WalletInstance.post(`${API_URL}/users/register`, userData);

  return response.data;
};

export const loginUser = async loginData => {
  const response = await WalletInstance.post(`${API_URL}/users/login`, loginData);

  const { accessToken, refreshToken } = response.data;

  Cookies.set('accessToken', accessToken);
  Cookies.set('refreshToken', refreshToken);

  return response.data;
};

export const getUserProfile = async () => {
  const response = await WalletInstance.get(`${API_URL}/users/profile`);

  return response.data;
};

export const logoutUser = async () => {
  await WalletInstance.get(`${API_URL}/users/logout`);
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
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
