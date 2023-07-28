//globalSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const setError = (state, action) => {
  state.error = action.payload;
};

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isLoading: false, // this one is for displaying global loader
    isModalLogoutOpen: false,
    isModalAddTransactionOpen: false,
    isModalEditTransactionOpen: false,
    error: null,
  },
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
  },
});

export const {
  setIsLoading,
  setIsModalLogoutOpen,
  setIsModalAddTransactionOpen,
  setIsModalEditTransactionOpen,
} = globalSlice.actions;

export default globalSlice.reducer;

// The basic logic for modals is to dispatch an action to change the state, e.g., dispatch(setIsModalLogoutOpen(true)),
// and conditionally render the modal or nothing based on the state flag, e.g., {isModalLogoutOpen && <LogoutModal />}
// or {isModalLogoutOpen ? <LogoutModal /> : null}.
// using portals would be nice too, but thats a thing for later maybve
