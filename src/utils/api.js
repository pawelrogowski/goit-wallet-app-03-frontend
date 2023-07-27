import axios from 'axios';

const WalletInstance = axios.create();

// export const API_URL = 'https://wallet-lzvg.onrender.com/api';
export const API_URL = 'https://wallet-pr-8.onrender.com/api';
export const setAuthToken = accessToken => {
  if (accessToken) {
    WalletInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  } else {
    delete WalletInstance.defaults.headers.common['Authorization'];
  }
};

export const registerUser = async userData => {
  const response = await WalletInstance.post(`${API_URL}/users/register`, userData);

  return response.data;
};

export const loginUser = async loginData => {
  const response = await WalletInstance.post(`${API_URL}/users/login`, loginData);

  const { accessToken, refreshToken } = response.data;

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);

  return response.data;
};

export const getUserProfile = async () => {
  const response = await WalletInstance.get(`${API_URL}/users/profile`);

  return response.data;
};

export const logoutUser = async () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');

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

export const refreshTokens = async () => {
  const refreshToken = localStorage.getItem('refreshToken');

  const response = await axios.post(`${API_URL}/users/refresh`, {
    refreshToken,
  });

  const { accessToken, refreshToken: newRefreshToken } = response.data;

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', newRefreshToken);

  return response.data;
};
