import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  registerUser,
  loginUser,
  logoutUser,
  setAuthToken,
  getUserProfile,
  refreshTokens,
} from '../../utils/api';

export const register = createAsyncThunk('session/register', async userData => {
  try {
    const response = await registerUser(userData);
    return { token: response.token, user: response.user };
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      toast.error(error.response.data.error);
    } else {
      toast.error('An unexpected error occurred during registration.');
    }
    throw error;
  }
});

export const login = createAsyncThunk('session/login', async loginData => {
  try {
    const response = await loginUser(loginData);
    return response;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      toast.error(error.response.data.error);
    } else {
      toast.error('An unexpected error occurred during login.');
    }
    throw error;
  }
});

export const logout = createAsyncThunk('session/logout', async () => {
  try {
    await logoutUser();
  } catch (error) {
    if (error.response && error.response.data) {
      toast.error(error.response.data.error);
    } else {
      toast.error('An unexpected error occurred during logout.');
    }
    throw error;
  }
});

export const fetchUserProfile = createAsyncThunk('users/fetchUserProfile', async () => {
  try {
    const response = await getUserProfile();
    return response;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      toast.error(error.response.data.error);
    } else {
      toast.error('An unexpected error occurred while fetching user profile.');
    }
    throw error;
  }
});

export const refreshAccessToken = createAsyncThunk('session/refreshAccessToken', async () => {
  try {
    const response = await refreshTokens();
    return response;
  } catch (error) {
    toast.error('An unexpected error occurred while refreshing access token.');
    throw error;
  }
});
export const sessionSlice = createSlice({
  name: 'session',

  initialState: {
    accessToken: null,
    refreshToken: null,
    user: {},
    currentUser: {},
    error: null,
    isAuth: false,
    isLoading: false,
  },

  extraReducers: builder => {
    // Register
    builder.addCase(register.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
      state.error = null;
    });

    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Login
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      const { accessToken, refreshToken, user } = action.payload;

      setAuthToken(accessToken);

      state.isLoading = false;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user = user;
      state.isAuth = true;
      state.error = null;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Logout
    builder.addCase(logout.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(logout.fulfilled, state => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = {};
      state.currentUser = {};
      state.isAuth = false;
      state.error = null;
    });

    builder.addCase(logout.rejected, (state, action) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = {};
      state.currentUser = {};
      state.isAuth = false;
      state.error = null;
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Refresh Tokens
    builder.addCase(refreshAccessToken.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(refreshAccessToken.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.error = null;
    });

    builder.addCase(refreshAccessToken.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default sessionSlice.reducer;
