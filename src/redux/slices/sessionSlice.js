import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, setAuthToken, getUserProfile } from '../../utils/api';

export const register = createAsyncThunk('session/register', async userData => {
  try {
    const response = await registerUser(userData);
    return { token: response.token, user: response.user };
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    } else {
      throw error;
    }
  }
});

export const login = createAsyncThunk('session/login', async loginData => {
  try {
    const response = await loginUser(loginData);
    return response;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    } else {
      throw error;
    }
  }
});

export const logout = createAsyncThunk('session/logout', async () => {
  try {
    await logoutUser();
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.error);
    } else {
      throw error;
    }
  }
});

export const fetchUserProfile = createAsyncThunk('users/fetchUserProfile', async () => {
  try {
    const response = await getUserProfile();
    return response;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    } else {
      throw error;
    }
  }
});

export const sessionSlice = createSlice({
  name: 'session',

  initialState: {
    token: null,
    user: {},
    currentUser: {}, // not sure if this even should be here, the user object exists anwyay
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
      state.token = action.payload.token;
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
      setAuthToken(action.payload.token);
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuth = true;
      state.isLoading = false;
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
      state.token = null;
      state.user = {};
      state.currentUser = {};
      state.isAuth = false;
      state.error = null;
    });

    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Fetch User Profile

    builder.addCase(fetchUserProfile.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.error = null;
    });

    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export default sessionSlice.reducer;
