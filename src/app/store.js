import { configureStore } from '@reduxjs/toolkit';
import invoiceReducer from '../features/invoice/invoiceSlice';
import statusReducer from '../features/status/statusSlice';

export const store = configureStore({
  reducer: {
    invoices: invoiceReducer,
    statuses: statusReducer,
  },
});
