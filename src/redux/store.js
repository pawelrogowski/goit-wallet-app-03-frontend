import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import sessionReducer from './slices/sessionSlice';
import globalReducer from './slices/globalSlice';
import transactionsReducer from './slices/transactionSlice';
import { setDispatch } from 'utils/authUtils';
const rootReducer = combineReducers({
  session: sessionReducer,
  global: globalReducer,
  finance: transactionsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

setDispatch(store.dispatch);
export const persistor = persistStore(store);

export default store;
