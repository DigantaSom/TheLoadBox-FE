import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app/store';
import { AuctionState, NewLanesData, AuctionConfigurationData } from './auction.types';

const initialState: AuctionState = {
  isCreateNewAuctionClicked: false,
  newLaneDetails: null,
  newAuctionConfigurationDetails: null,
};

const auctionSlice = createSlice({
  name: 'auction',
  initialState,
  reducers: {
    setCreateNewAuctionClicked: (state, action: PayloadAction<boolean>) => {
      state.isCreateNewAuctionClicked = action.payload;
    },
    setNewLaneDetails: (state, action: PayloadAction<NewLanesData>) => {
      state.newLaneDetails = action.payload;
    },
    setNewAuctionConfigurationDetails: (state, action: PayloadAction<AuctionConfigurationData>) => {
      state.newAuctionConfigurationDetails = action.payload;
    },
    clearNewAuctionConfigurationDetails: state => {
      state.isCreateNewAuctionClicked = false;
      state.newLaneDetails = null;
      state.newAuctionConfigurationDetails = null;
    },
  },
});

// selectors
export const selectIsCreateNewAuctionClicked = (state: RootState) =>
  state.auction.isCreateNewAuctionClicked;

export const selectNewLaneDetails = (state: RootState) => state.auction.newLaneDetails;

export const selectNewAuctionConfigurationDetails = (state: RootState) =>
  state.auction.newAuctionConfigurationDetails;

// action creators
export const {
  setCreateNewAuctionClicked,
  setNewLaneDetails,
  setNewAuctionConfigurationDetails,
  clearNewAuctionConfigurationDetails,
} = auctionSlice.actions;

export default auctionSlice.reducer;
