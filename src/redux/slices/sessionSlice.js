import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser, loginUser } from '../../utils/api';

export const register = createAsyncThunk('users/register', async userData => {
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

export const login = createAsyncThunk('users/login', async loginData => {
  try {
    const response = await loginUser(loginData);
    // localStorage.setItem('token', response.token);
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
    error: null,
    isAuth: false,
    isLoading: false,
  },
  extraReducers: builder => {
    builder.addCase(register.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    });

    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuth = true;
      state.isLoading = false;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
export default sessionSlice.reducer;
