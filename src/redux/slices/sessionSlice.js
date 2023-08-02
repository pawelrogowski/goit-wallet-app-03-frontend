import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { registerUser, loginUser, logoutUser, getUserProfile } from '../../utils/api';
import { refreshTokens, setAuthToken } from 'utils/authUtils';
import { resetGlobal, setIsLoading } from './globalSlice';
import { resetTransactions } from './transactionSlice';

export const register = createAsyncThunk('session/register', async (userData, { dispatch }) => {
  dispatch(setIsLoading(true));
  try {
    dispatch(setIsLoading(true));
    const response = await registerUser(userData);
    return { token: response.token, user: response.user };
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      toast.error(error.response.data.error);
    } else {
      toast.error('An unexpected error occurred during registration.');
    }
    throw error;
  } finally {
    dispatch(setIsLoading(false));
  }
});

export const login = createAsyncThunk('session/login', async (loginData, { dispatch }) => {
  try {
    dispatch(setIsLoading(true));
    const response = await loginUser(loginData);
    return response;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      toast.error(error.response.data.error);
    } else {
      toast.error('An unexpected error occurred during login.');
    }
    throw error;
  } finally {
    dispatch(setIsLoading(false));
  }
});

export const logout = createAsyncThunk('session/logout', async (_, { dispatch }) => {
  try {
    dispatch(setIsLoading(true));
    await logoutUser();
    dispatch(resetGlobal());
    dispatch(resetTransactions());
    dispatch(resetSession());
  } catch (error) {
    if (error.response && error.response.data) {
      toast.error(error.response.data.error);
    } else {
      toast.error('An unexpected error occurred during logout.');
    }
    throw error;
  }
});

export const fetchUserProfile = createAsyncThunk(
  'users/fetchUserProfile',
  async (_, { dispatch }) => {
    dispatch(setIsLoading(true));
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
    } finally {
      dispatch(setIsLoading(false));
    }
  }
);

export const refreshAccessToken = createAsyncThunk(
  'session/refreshAccessToken',
  async (_, { dispatch }) => {
    dispatch(setIsLoading(true));
    try {
      const response = await refreshTokens();
      return response;
    } catch (error) {
      toast.error('An unexpected error occurred while refreshing access token.');
      throw error;
    } finally {
      dispatch(setIsLoading(false));
    }
  }
);

const initialState = {
  user: {},
  currentUser: {},
  error: null,
  isAuth: false,
  isLoading: false,
};

export const sessionSlice = createSlice({
  name: 'session',

  initialState,

  reducers: {
    reset: () => initialState,
  },

  extraReducers: builder => {
    builder.addCase(register.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload;

      setAuthToken(accessToken);

      state.isLoading = false;
      state.user = user;
      state.isAuth = true;
      state.error = null;
    });

    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.isAuth = false;
    });

    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload;

      setAuthToken(accessToken);

      state.isLoading = false;
      state.user = user;
      state.isAuth = true;
      state.error = null;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(logout.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(logout.fulfilled, state => {
      state.user = {};
      state.currentUser = {};
      state.isAuth = false;
      state.error = null;
    });

    builder.addCase(logout.rejected, (state, action) => {
      state.user = {};
      state.currentUser = {};
      state.isAuth = false;
      state.error = null;
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(refreshAccessToken.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(refreshAccessToken.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = 'New Auth Token Aquired';
      state.error = null;
    });

    builder.addCase(refreshAccessToken.rejected, (state, action) => {
      state.isLoading = false;
      state.error = 'Could not verify user, you have been logged out';
      state.isAuth = false;
    });
  },
});

export const { reset: resetSession } = sessionSlice.actions;
export default sessionSlice.reducer;
