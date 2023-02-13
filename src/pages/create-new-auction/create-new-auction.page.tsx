import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { AuctionType } from '../../features/auction/auction.types';

import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import {
  selectIsCreateNewAuctionClicked,
  selectNewLaneDetails,
  selectNewAuctionConfigurationDetails,
  selectCanSaveLaneAuction,
  setCreateNewAuctionClicked,
  clearNewAuctionDetails,
} from '../../features/auction/auction.slice';

import BlackButton from '../../components/BlackButton';
import AuctionConfiguration from './AuctionConfiguration';
import AuctionUploadAttachments from './AuctionUploadAttachments';

import BackIcon from '../../images/back-icon.png';

const CreateAuctionPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const isCreateNewAuctionClicked = useAppSelector(selectIsCreateNewAuctionClicked);
  const newLaneDetails = useAppSelector(selectNewLaneDetails);
  const newAuctionConfigurationDetails = useAppSelector(selectNewAuctionConfigurationDetails);
  const canSaveLaneAuction = useAppSelector(selectCanSaveLaneAuction);

  let initialSelectedOption = '';

  if (pathname.includes('/lot-auction')) {
    initialSelectedOption = 'lot-auction';
  } else {
    initialSelectedOption = 'lane-auction';
  }

  const [selectedAuctionType, setSelectedAuctionType] = useState<AuctionType>(
    initialSelectedOption as AuctionType
  );
  const [canSaveNewAuctionData, setCanSaveNewAuctionData] = useState(false);

  useEffect(() => {
    // we can add other criteria here in the future, if needed
    setCanSaveNewAuctionData(canSaveLaneAuction);
  }, [canSaveLaneAuction]);

  useEffect(() => {
    if (
      isCreateNewAuctionClicked &&
      canSaveNewAuctionData &&
      newLaneDetails &&
      newAuctionConfigurationDetails
    ) {
      console.log(
        'Ready to send the newly created Auction Data to the backend, after doing some modifications, if needed.'
      );
      console.log({
        newLaneDetails,
        newAuctionConfigurationDetails,
      });

      // clear the newly created auction data from the redux state
      dispatch(clearNewAuctionDetails());

      // TODO: navigate to some other page
    }
  }, [
    isCreateNewAuctionClicked,
    canSaveNewAuctionData,
    newLaneDetails,
    newAuctionConfigurationDetails,
    dispatch,
  ]);

  const handleSelectAuctionType = (auctionType: AuctionType) => {
    setSelectedAuctionType(auctionType);
    if (auctionType === 'lot-auction') {
      navigate(auctionType);
    } else {
      navigate('');
    }
  };

  const handleClickCreateAuction = () => {
    dispatch(setCreateNewAuctionClicked(true));
  };

  const selectedAuctionTypeStyles = 'border-[1px] border-black p-[11px]';

  return (
    <>
      <header className="h-[92px] px-[120px] py-6 bg-white flex items-center justify-between border-b-[1px] border-[#EEE]">
        <Link to="/" className="bg-[#F7F7F7] p-3 rounded-[4px] flex items-center gap-2">
          <img src={BackIcon} alt="" />
          <span className="font-medium text-black-custom text-sm leading-[18px]">
            Back to Sourcing
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <div
            onClick={() => {}}
            className="p-[11px] font-medium text-black-custom text-sm rounded-[4px] border-[1px] border-black hover:cursor-pointer"
          >
            Save as draft
          </div>
          <BlackButton
            title="Create Auction"
            handleClickButton={handleClickCreateAuction}
            disabled={!canSaveNewAuctionData}
          />
        </div>
      </header>

      <main className="pt-6 pb-20 px-[120px] bg-[#F5F5F5]">
        <h2 className="text-black-custom text-2xl font-bold tracking-tight">Create new auction</h2>

        <div className="mt-6 grid grid-cols-5 gap-6">
          <div className="col-span-3 flex flex-col gap-6">
            {/* Lane Auction or Lot Auction */}
            <div className="flex items-start gap-2">
              {/* Lane Auction */}
              <div
                onClick={() => handleSelectAuctionType('lane-auction')}
                className={`w-full bg-white p-3 flex flex-col space-y-1 rounded-[4px] hover:cursor-pointer hover:border-[1px] hover:border-black hover:p-[11px] ${
                  selectedAuctionType === 'lane-auction' && selectedAuctionTypeStyles
                }`}
              >
                <span className="text-black-custom text-base leading-[21px] font-medium">
                  Lane Auction
                </span>
                <span className="text-[#9B9B9B] text-sm leading-[18px] font-medium">
                  Conduct an auction for a single lane
                </span>
              </div>

              {/* Lot Auction */}
              <div
                onClick={() => handleSelectAuctionType('lot-auction')}
                className={`w-full bg-white p-3 flex flex-col space-y-1 rounded-[4px] hover:cursor-pointer hover:border-[1px] hover:border-black hover:p-[11px] ${
                  selectedAuctionType === 'lot-auction' && selectedAuctionTypeStyles
                }`}
              >
                <span className="text-black-custom text-base leading-[21px] font-medium">
                  Lot Auction
                </span>
                <span className="text-[#9B9B9B] text-sm leading-[18px] font-medium">
                  Conduct an auction for multiple lanes at once
                </span>
              </div>
            </div>

            <Outlet />
          </div>

          <div className="col-span-2">
            <div className="flex flex-col gap-6">
              <AuctionConfiguration />
              <AuctionUploadAttachments />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateAuctionPage;
