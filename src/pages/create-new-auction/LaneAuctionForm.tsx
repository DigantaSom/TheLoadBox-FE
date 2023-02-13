import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { LaneAuctionData } from '../../features/auction/auction.types';

import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import {
  selectIsCreateNewAuctionClicked,
  setNewLaneDetails,
  toggle_canSaveLaneAuction,
} from '../../features/auction/auction.slice';

import LaneFormItem from './LaneFormItem';

import UploadIcon from '../../images/upload-icon.png';
import AddIcon2 from '../../images/add-icon-2.png';

const LaneAuctionForm = () => {
  const dispatch = useAppDispatch();
  const isCreateNewAuctionClicked = useAppSelector(selectIsCreateNewAuctionClicked);

  const [auctionName, setAuctionName] = useState('');
  const [totalLanes, setTotalLanes] = useState(1);
  const [laneArray, setLaneArray] = useState([1]);
  const [laneFields, setLaneFields] = useState<Record<number, LaneAuctionData>>({
    1: {
      source: '',
      destination: '',
      truckType: '',
      numberOfTrips: '',
      loadType: '',
      priceCapPerTrip: '',
      tickPrice: '',
    },
  });
  const [canSaveLaneDetails, setCanSaveLaneDetails] = useState(false);

  useEffect(() => {
    dispatch(toggle_canSaveLaneAuction(canSaveLaneDetails && !!auctionName));
  }, [dispatch, canSaveLaneDetails, auctionName]);

  useEffect(() => {
    if (canSaveLaneDetails && isCreateNewAuctionClicked) {
      dispatch(
        setNewLaneDetails({
          auctionName,
          laneDetails: laneFields,
        })
      );
    }
  }, [canSaveLaneDetails, isCreateNewAuctionClicked, dispatch, auctionName, laneFields]);

  // console.log(totalLanes, laneArray);
  // console.log(laneFields);

  const handleSetLaneFormData = useCallback(
    (laneFormData: LaneAuctionData, laneNumber: number, canSave: boolean) => {
      setCanSaveLaneDetails(canSave);

      const temp_laneFields = { ...laneFields };
      temp_laneFields[laneNumber] = laneFormData;
      setLaneFields(temp_laneFields);
    },
    [laneFields]
  );

  const onChangeAuctionName = (e: ChangeEvent<HTMLInputElement>) => {
    setAuctionName(e.target.value);
  };

  const handleAddLane = () => {
    setTotalLanes(prevState => prevState + 1);
    setLaneArray(prev => [...prev, prev[prev.length - 1] + 1]);
  };

  const handleDeleteLane = (laneNumber: number) => {
    if (totalLanes > 1) {
      setTotalLanes(prevState => prevState - 1);
      const temp_laneArray = laneArray.filter(l => l !== laneNumber);
      setLaneArray(temp_laneArray);

      const temp_laneFields = { ...laneFields };
      delete temp_laneFields[laneNumber];
      setLaneFields(temp_laneFields);
    }
  };

  return (
    <>
      {/* Lane and Truck Details */}
      <div className="bg-white border-[1px] border-[#EEE] rounded-[4px]">
        <div className="p-4 border-b-[1px] border-[#EEE] flex items-center justify-between">
          <div className="text-black-custom text-base leading-[21px] font-medium">
            Lane and Truck Details
          </div>
          <div className="flex items-center gap-2 hover:cursor-pointer">
            <img src={UploadIcon} alt="" />
            <span className="text-sm leading-[18px] text-[#2279FD] font-medium">Upload CSV</span>
          </div>
        </div>

        {/* Main container */}
        <main className="p-4">
          {/* Auction Name */}
          <div className="w-full flex flex-col gap-2 text-sm leading-[18px] font-medium">
            <span className="text-[#989898]">Auction Name</span>
            <input
              type="text"
              placeholder="Enter auction name"
              value={auctionName}
              onChange={onChangeAuctionName}
              className="text-black-custom p-3 border-[1px] border-[#EEE] rounded-[4px] focus:outline-none placeholder:text-[#9B9B9B]"
            />
          </div>

          {/* Lane Form Item */}
          {laneArray.map((item: number, index: number) => (
            <LaneFormItem
              key={item}
              laneNumberToDisplay={index + 1}
              laneNumber={item}
              totalLanes={totalLanes}
              handleDeleteLane={handleDeleteLane}
              handleSetLaneFormData={handleSetLaneFormData}
            />
          ))}

          {/* Add Lane button */}
          <button
            onClick={handleAddLane}
            className="bg-[#F6F6F6] radius-[4px] p-3 flex items-center gap-2 hover:cursor-pointer"
          >
            <img src={AddIcon2} alt="" />
            <span className="text-black-custom text-sm leading-[18px] font-medium">Add lane</span>
          </button>
        </main>
      </div>
    </>
  );
};

export default LaneAuctionForm;
