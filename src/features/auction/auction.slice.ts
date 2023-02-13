import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { AuctionState, NewLanesData, AuctionConfigurationData } from './auction.types';

const initialState: AuctionState = {
  isCreateNewAuctionClicked: false,
  newLaneDetails: null,
  newAuctionConfigurationDetails: null,
  canSaveLaneAuction: false,
};

const auctionSlice = createSlice({
  name: 'auction',
  initialState,
  reducers: {
    setCreateNewAuctionClicked: (state, action: PayloadAction<boolean>) => {
      state.isCreateNewAuctionClicked = action.payload;
    },
    toggle_canSaveLaneAuction: (state, action: PayloadAction<boolean>) => {
      state.canSaveLaneAuction = action.payload;
    },
    setNewLaneDetails: (state, action: PayloadAction<NewLanesData>) => {
      // we can add other criteria here in the future, if needed
      if (state.canSaveLaneAuction) {
        state.newLaneDetails = action.payload;
      }
    },
    setNewAuctionConfigurationDetails: (state, action: PayloadAction<AuctionConfigurationData>) => {
      state.newAuctionConfigurationDetails = action.payload;
    },
    clearNewAuctionDetails: state => {
      state.isCreateNewAuctionClicked = false;
      state.newLaneDetails = null;
      state.newAuctionConfigurationDetails = null;
    },
  },
});

// selectors
export const selectIsCreateNewAuctionClicked = (state: RootState) =>
  state.auction.isCreateNewAuctionClicked;

export const selectCanSaveLaneAuction = (state: RootState) => state.auction.canSaveLaneAuction;

export const selectNewLaneDetails = (state: RootState) => state.auction.newLaneDetails;

export const selectNewAuctionConfigurationDetails = (state: RootState) =>
  state.auction.newAuctionConfigurationDetails;

// action creators
export const {
  setCreateNewAuctionClicked,
  toggle_canSaveLaneAuction,
  setNewLaneDetails,
  setNewAuctionConfigurationDetails,
  clearNewAuctionDetails,
} = auctionSlice.actions;

export default auctionSlice.reducer;
