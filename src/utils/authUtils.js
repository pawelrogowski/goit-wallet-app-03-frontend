import axios from 'axios';
import Cookies from 'js-cookie';
import { resetSession } from 'redux/slices/sessionSlice';
const { REACT_APP_BACKEND_URI } = process.env;
export const API_URL = REACT_APP_BACKEND_URI;

const WalletInstance = axios.create();
export { WalletInstance };

let dispatchFunction;

export const setDispatch = dispatch => {
  dispatchFunction = dispatch;
};

export const setAuthToken = () => {
  const accessToken = Cookies.get('accessToken');
  if (accessToken) {
    WalletInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  } else {
    delete WalletInstance.defaults.headers.common['Authorization'];
  }
};

export const cookieOptions = {
  expires: 30,
  path: '/',
  secure: true,
  sameSite: 'strict',
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
      Cookies.set('accessToken', accessToken, cookieOptions);
      Cookies.set('refreshToken', newRefreshToken, cookieOptions);

      return { accessToken, refreshToken };
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Cookies.remove('accessToken', { path: '/' });
        Cookies.remove('refreshToken', { path: '/' });
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

WalletInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { accessToken } = await refreshTokens();
        if (!accessToken) {
          return;
        }
        WalletInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        return WalletInstance(originalRequest);
      } catch (refreshError) {
        dispatchFunction(resetSession());
        const currentUrl = window.location.pathname;
        if (currentUrl !== '/login' && currentUrl !== '/register') {
          window.location.replace('/login');
        }
        return;
      }
    } else {
      dispatchFunction(resetSession());
      const currentUrl = window.location.pathname;
      if (currentUrl !== '/login' && currentUrl !== '/register') {
        window.location.replace('/login');
      }
    }

    return Promise.reject(error);
  }
);
