export interface AuctionState {
  isCreateNewAuctionClicked: boolean;
  newLaneDetails: NewLanesData | null;
  newAuctionConfigurationDetails: AuctionConfigurationData | null;
  canSaveLaneAuction: boolean;
}

export type AuctionType = 'lane-auction' | 'lot-auction';

export interface LaneAuctionData {
  source: string;
  destination: string;
  truckType: string;
  numberOfTrips: string;
  loadType: string;
  priceCapPerTrip: string;
  tickPrice: string;
}

interface LotAuctionData {}

export interface AuctionConfigurationData {
  auctionDuration: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  priceValidity: {
    value: number;
    unit: string;
  };
}

export interface AuctionData {
  name: string;
  main:
    | {
        type: 'lane-auction';
        data: LaneAuctionData;
      }
    | {
        type: 'lot-auction';
        data: LotAuctionData;
      };
  configuration: AuctionConfigurationData;
}

export interface NewLanesData {
  auctionName: string;
  laneDetails: Record<number, LaneAuctionData>;
}
