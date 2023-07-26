import { configureStore } from '@reduxjs/toolkit';

import sessionReducer from './slices/sessionSlice';
import globalReducer from './slices/globalSlice';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    global: globalReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
