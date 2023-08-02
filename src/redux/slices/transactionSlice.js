import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  getTransactions,
  createTransaction,
  deleteTransaction,
  updateTransaction,
  filterTransactions,
  getCategoryTotals,
  getMonthlyCategoryTotals,
} from '../../utils/api';
import { setIsLoading } from './globalSlice';
const filterTransaction = transaction => {
  const { _id, amount, date, isIncome, category, comment } = transaction;

  return {
    _id,
    amount,
    date,
    isIncome,
    category,
    comment,
  };
};

export const fetchTransactions = createAsyncThunk(
  'finance/fetchTransactions',
  async (_, { dispatch }) => {
    dispatch(setIsLoading(true));
    try {
      const response = await getTransactions();
      const filtered = response.map(filterTransaction);
      return filtered;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        throw new Error(error.response.data.error);
      } else {
        throw error;
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  }
);

export const addTransaction = createAsyncThunk(
  'finance/addTransaction',
  async (transactionData, { dispatch }) => {
    dispatch(setIsLoading(true));
    try {
      const response = await createTransaction(transactionData);
      return response;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        throw new Error(error.response.data.error);
      } else {
        throw error;
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  }
);

export const removeTransaction = createAsyncThunk(
  'finance/removeTransaction',
  async (transactionId, { dispatch }) => {
    dispatch(setIsLoading(true));
    try {
      await deleteTransaction(transactionId);
      return transactionId;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        throw new Error(error.response.data.error);
      } else {
        throw error;
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  }
);

export const editTransaction = createAsyncThunk(
  'finance/editTransaction',
  async ({ id, updatedData }, { dispatch }) => {
    dispatch(setIsLoading(true));
    try {
      const response = await updateTransaction(id, updatedData);
      return response;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        throw new Error(error.response.data.error);
      } else {
        throw error;
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  }
);

export const fetchFilteredTransactions = createAsyncThunk(
  'finance/fetchFilteredTransactions',
  async ({ month, year }, { dispatch }) => {
    dispatch(setIsLoading(true));
    try {
      const response = await filterTransactions(month, year);
      return response;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        throw new Error(error.response.data.error);
      } else {
        throw error;
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  }
);

export const fetchTotals = createAsyncThunk('finance/fetchTotals', async (_, { dispatch }) => {
  dispatch(setIsLoading(true));
  try {
    const response = await getCategoryTotals();
    return response;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    } else {
      throw error;
    }
  } finally {
    dispatch(setIsLoading(false));
  }
});

export const fetchMonthlyTotals = createAsyncThunk(
  'finance/fetchMonthlyTotals',
  async ({ month, year }, { dispatch }) => {
    dispatch(setIsLoading(true));
    try {
      const response = await getMonthlyCategoryTotals(month, year);
      return response;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        throw new Error(error.response.data.error);
      } else {
        throw error;
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  }
);

export const setSelectedMonth = month => {
  return {
    type: 'finance/setSelectedMonth',
    payload: month,
  };
};

export const setSelectedYear = year => {
  return {
    type: 'finance/setSelectedYear',
    payload: year,
  };
};

export const setTransactionToEdit = transaction => {
  return {
    type: 'finance/setTransactionToEdit',
    payload: transaction,
  };
};

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

    toast.error(action.payload);
  } else {
    state.error = action.error.message;

    toast.error(action.error.message);
  }
};

const initialState = {
  selectedMonth: null,
  selectedYear: null,
  isLoading: false,
  error: null,
  currentTransactionToEdit: {
    _id: null,
    amount: 0,
    date: '',
    isIncome: false,
    category: '',
    comment: '',
  },
  transactions: [],
  filteredTransactions: [],
  totals: {},
  monthlyTotals: {},
};

export const transactionsSlice = createSlice({
  name: 'finance',

  initialState,

  reducers: {
    setSelectedMonth(state, action) {
      state.selectedMonth = action.payload;
    },
    setSelectedYear(state, action) {
      state.selectedYear = action.payload;
    },

    setTransactionToEdit(state, action) {
      state.currentTransactionToEdit = action.payload;
    },
    reset: () => initialState,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, startLoading)
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        handleSuccess(state, action);
      })
      .addCase(fetchTransactions.rejected, handleError)

      .addCase(addTransaction.pending, startLoading)
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
        handleSuccess(state, action);
      })
      .addCase(addTransaction.rejected, handleError)

      .addCase(removeTransaction.pending, startLoading)
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.transactions = state.transactions.filter(t => t._id !== action.payload);
        handleSuccess(state, action);
      })
      .addCase(removeTransaction.rejected, handleError)

      .addCase(editTransaction.pending, startLoading)
      .addCase(editTransaction.fulfilled, (state, action) => {
        const index = state.transactions.findIndex(t => t._id === action.payload._id);
        state.transactions[index] = action.payload;
        handleSuccess(state, action);
      })
      .addCase(editTransaction.rejected, handleError)

      .addCase(fetchFilteredTransactions.pending, startLoading)
      .addCase(fetchFilteredTransactions.fulfilled, (state, action) => {
        state.filteredTransactions = action.payload;
        handleSuccess(state, action);
      })
      .addCase(fetchFilteredTransactions.rejected, handleError)

      .addCase(fetchTotals.pending, startLoading)
      .addCase(fetchTotals.fulfilled, (state, action) => {
        state.totals = action.payload;
        handleSuccess(state, action);
      })
      .addCase(fetchTotals.rejected, handleError)

      .addCase(fetchMonthlyTotals.pending, startLoading)
      .addCase(fetchMonthlyTotals.fulfilled, (state, action) => {
        state.monthlyTotals = action.payload;
        handleSuccess(state, action);
      })
      .addCase(fetchMonthlyTotals.rejected, handleError);
  },
});
export const { reset: resetTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;
