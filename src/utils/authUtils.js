import { WalletInstance, API_URL } from './api';
import Cookies from 'js-cookie';

export const setAuthToken = () => {
  const accessToken = Cookies.get('accessToken');
  if (accessToken) {
    WalletInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  } else {
    delete WalletInstance.defaults.headers.common['Authorization'];
  }
};

export const refreshTokens = async () => {
  const refreshToken = Cookies.get('refreshToken');
  if (refreshToken) {
    setAuthToken();
  }

  if (refreshToken) {
    try {
      const response = await WalletInstance.post(`${API_URL}/users/refresh`, {
        refreshToken,
      });

      const { accessToken, refreshToken: newRefreshToken } = response.data;
      Cookies.set('accessToken', accessToken);
      Cookies.set('refreshToken', newRefreshToken);
      console.log('tokens refreshed');

      return { accessToken, refreshToken };
    } catch (error) {
      if (error.response.status === 401) {
        console.log('Refresh token invalid');
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
      } else {
        throw error;
      }
    }
  }
};

export const startRefreshInterval = () => {
  setInterval(refreshTokens, 29 * 60 * 1000);
};

startRefreshInterval();
