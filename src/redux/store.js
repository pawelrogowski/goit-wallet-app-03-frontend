import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import sessionReducer from './slices/sessionSlice';
import globalReducer from './slices/globalSlice';

const rootReducer = combineReducers({
  session: sessionReducer,
  global: globalReducer,
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

export const persistor = persistStore(store);

export default store;
