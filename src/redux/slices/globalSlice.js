import { createSlice } from '@reduxjs/toolkit';

export const setError = (state, action) => {
  state.error = action.payload;
};
const initialState = {
  isLoading: false,
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  isModalEditTransactionOpen: false,
  error: null,
};
export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsModalLogoutOpen: (state, action) => {
      state.isModalLogoutOpen = action.payload;
    },
    setIsModalAddTransactionOpen: (state, action) => {
      state.isModalAddTransactionOpen = action.payload;
    },
    setIsModalEditTransactionOpen: (state, action) => {
      state.isModalEditTransactionOpen = action.payload;
    },
    toggleIsLoading: state => {
      state.isLoading = !state.isLoading;
    },
    reset: () => initialState,
  },
});
export const resetGlobalState = globalSlice.reducer;
export const {
  setIsLoading,
  setIsModalLogoutOpen,
  setIsModalAddTransactionOpen,
  setIsModalEditTransactionOpen,
} = globalSlice.actions;

export const { reset: resetGlobal, toggleIsLoading } = globalSlice.actions;
export default globalSlice.reducer;
