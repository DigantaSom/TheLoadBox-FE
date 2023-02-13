import { configureStore } from '@reduxjs/toolkit';

import auctionReducer from '../features/auction/auction.slice';

export const store = configureStore({
  reducer: {
    auction: auctionReducer,
  },
  devTools: process.env.NODE_ENV === 'development' ? true : false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
