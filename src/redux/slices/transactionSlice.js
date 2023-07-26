//transactionsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTransactions,
  createTransaction,
  deleteTransaction,
  updateTransaction,
  filterTransactions,
  getCategoryTotals,
  getMonthlyCategoryTotals,
} from '../../utils/api';

export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async () => {
  try {
    const response = await getTransactions();
    return response;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw error;
    }
  }
});

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async transactionData => {
    try {
      const response = await createTransaction(transactionData);
      return response;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data);
      } else {
        throw error;
      }
    }
  }
);

export const removeTransaction = createAsyncThunk(
  'transactions/removeTransaction',
  async transactionId => {
    try {
      await deleteTransaction(transactionId);
      return transactionId;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data);
      } else {
        throw error;
      }
    }
  }
);

export const editTransaction = createAsyncThunk(
  'transactions/editTransaction',
  async ({ id, updatedData }) => {
    try {
      const response = await updateTransaction(id, updatedData);
      return response;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data);
      } else {
        throw error;
      }
    }
  }
);

// transactionSlice.js
export const fetchFilteredTransactions = createAsyncThunk(
  'transactions/fetchFilteredTransactions',
  async ({ month, year }) => {
    // Accept month and year as an object
    try {
      const response = await filterTransactions(month, year);
      return response;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data);
      } else {
        throw error;
      }
    }
  }
);

export const fetchTotals = createAsyncThunk('transactions/fetchTotals', async () => {
  try {
    const response = await getCategoryTotals();
    return response;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw error;
    }
  }
});

export const fetchMonthlyTotals = createAsyncThunk(
  'transactions/fetchMonthlyTotals',
  async ({ month, year }) => {
    try {
      const response = await getMonthlyCategoryTotals(month, year);
      return response;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data);
      } else {
        throw error;
      }
    }
  }
);

// some helpers keep it DRY
const startLoading = state => {
  state.isLoading = true;
};

const stopLoading = state => {
  state.isLoading = false;
};

const handleSuccess = (state, action) => {
  stopLoading(state);
  state.error = null;
};

const handleError = (state, action) => {
  stopLoading(state);

  if (action.payload) {
    state.error = action.payload;
  } else {
    state.error = action.error.message;
  }
};

export const transactionsSlice = createSlice({
  name: 'transactions',

  initialState: {
    transactions: [],
    filteredTransactions: [],
    totals: {},
    monthlyTotals: {},
    isLoading: false,
    error: null,
  },

  reducers: {},

  extraReducers: {
    [fetchTransactions.pending]: startLoading,

    [fetchTransactions.fulfilled]: (state, action) => {
      state.transactions = action.payload;
      handleSuccess(state, action);
    },

    [fetchTransactions.rejected]: handleError,

    [addTransaction.pending]: startLoading,

    [addTransaction.fulfilled]: (state, action) => {
      state.transactions.push(action.payload);
      handleSuccess(state, action);
    },

    [addTransaction.rejected]: handleError,

    [removeTransaction.pending]: startLoading,

    [removeTransaction.fulfilled]: (state, action) => {
      state.transactions = state.transactions.filter(t => t._id !== action.payload);
      handleSuccess(state, action);
    },

    [removeTransaction.rejected]: handleError,

    [editTransaction.pending]: startLoading,

    [editTransaction.fulfilled]: (state, action) => {
      const index = state.transactions.findIndex(t => t._id === action.payload._id);
      state.transactions[index] = action.payload;
      handleSuccess(state, action);
    },

    [editTransaction.rejected]: handleError,

    [fetchFilteredTransactions.pending]: startLoading,

    [fetchFilteredTransactions.fulfilled]: (state, action) => {
      state.filteredTransactions = action.payload;
      handleSuccess(state, action);
    },

    [fetchFilteredTransactions.rejected]: handleError,
    [fetchTotals.pending]: startLoading,

    [fetchTotals.fulfilled]: (state, action) => {
      state.totals = action.payload;
      handleSuccess(state, action);
    },

    [fetchTotals.rejected]: handleError,

    [fetchMonthlyTotals.pending]: startLoading,

    [fetchMonthlyTotals.fulfilled]: (state, action) => {
      state.monthlyTotals = action.payload;
      handleSuccess(state, action);
    },

    [fetchMonthlyTotals.rejected]: handleError,
  },
});

export default transactionsSlice.reducer;
