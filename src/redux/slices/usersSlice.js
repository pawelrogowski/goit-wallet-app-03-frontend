import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser, loginUser } from '../../utils/api';

export const register = createAsyncThunk('users/register', async userData => {
  const response = await registerUser(userData);
  return response.user;
});

export const login = createAsyncThunk('users/login', async loginData => {
  const response = await loginUser(loginData);
  return response.user;
});

export const usersSlice = createSlice({
  name: 'users',

  initialState: {
    user: null,
    error: null,
    isLoading: false,
  },

  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });

    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default usersSlice.reducer;
