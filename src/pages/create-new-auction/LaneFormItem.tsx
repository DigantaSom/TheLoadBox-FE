import { ChangeEvent, FC, useEffect, useState } from 'react';

import { LaneAuctionData } from '../../features/auction/auction.types';

import K from '../../constants';

import DeleteIcon from '../../images/delete-icon.png';
import RightArrowIcon from '../../images/right-arrow-icon.png';

interface LaneFormItemProps {
  laneNumberToDisplay: number;
  laneNumber: number;
  totalLanes: number;
  handleDeleteLane: (laneNumber: number) => void;
  handleSetLaneFormData: (
    laneFormData: LaneAuctionData,
    laneNumber: number,
    canSave: boolean
  ) => void;
}

const LaneFormItem: FC<LaneFormItemProps> = ({
  laneNumberToDisplay,
  laneNumber,
  totalLanes,
  handleDeleteLane,
  handleSetLaneFormData,
}) => {
  const [laneFormData, setLaneFormData] = useState<LaneAuctionData>({
    source: '',
    destination: '',
    truckType: '',
    numberOfTrips: '',
    loadType: '',
    priceCapPerTrip: '',
    tickPrice: '',
  });

  const { source, destination, truckType, numberOfTrips, loadType, priceCapPerTrip, tickPrice } =
    laneFormData;

  const canSave = [
    source,
    destination,
    truckType,
    numberOfTrips,
    loadType,
    priceCapPerTrip,
    tickPrice,
  ].every(Boolean);

  useEffect(() => {
    handleSetLaneFormData(laneFormData, laneNumber, canSave);
    // eslint-disable-next-line
  }, [laneFormData, laneNumber, canSave]);

  const onChangeSource = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLaneFormData({
      ...laneFormData,
      source: value,
    });
  };

  const onChangeDestination = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLaneFormData({
      ...laneFormData,
      destination: value,
    });
  };

  const onChangeTruckType = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLaneFormData({
      ...laneFormData,
      truckType: value,
    });
  };

  const onChangeNumberOfTrips = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const value_number = +value;
    if (isNaN(value_number)) return;
    setLaneFormData({
      ...laneFormData,
      numberOfTrips: value,
    });
  };

  const onChangeLoadType = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLaneFormData({
      ...laneFormData,
      loadType: value,
    });
  };

  const onChangePriceCapPerTrip = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const value_number = +value;
    if (isNaN(value_number)) return;
    setLaneFormData({
      ...laneFormData,
      priceCapPerTrip: value,
    });
  };

  const onChangeTickPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const value_number = +value;
    if (isNaN(value_number)) return;
    setLaneFormData({
      ...laneFormData,
      tickPrice: value,
    });
  };

  const truckTypeOptions = K.truckTypes.map(type => (
    <option key={type} value={type}>
      {type}
    </option>
  ));
  const loadTypeOptions = K.loadTypes.map(type => (
    <option key={type} value={type}>
      {type}
    </option>
  ));

  return (
    <div className="my-4 p-4 bg-[#FAFAFA] border-[1px] border-[#EEE] rounded-lg">
      {/* Lane number */}
      <div className="flex items-center justify-between border-b-[1px] border-[#D6D6D6] pb-4">
        <div className="text-black-custom text-base leading-[18px] font-medium">
          Lane {laneNumberToDisplay}
        </div>
        {totalLanes > 1 && (
          <div
            onClick={() => handleDeleteLane(laneNumber)}
            className="hover:cursor-pointer"
            title="Delete Lane"
          >
            <img src={DeleteIcon} alt="Delete Lane" />
          </div>
        )}
      </div>

      {/* Source and Destination */}
      <div className="pt-4 flex items-end gap-4">
        <div className="w-full flex flex-col gap-2 text-sm leading-[18px] font-medium">
          <span className="text-[#989898]">Source</span>
          <input
            type="text"
            placeholder="Enter Source"
            value={source}
            onChange={onChangeSource}
            className="text-black-custom p-3 border-[1px] border-[#EEE] rounded-[4px] focus:outline-none placeholder:text-[#9B9B9B]"
          />
        </div>
        <img src={RightArrowIcon} alt="To" className="pb-4" />
        <div className="w-full flex flex-col gap-2 text-sm leading-[18px] font-medium">
          <span className="text-[#989898]">Destination</span>
          <input
            type="text"
            placeholder="Enter Destination"
            value={destination}
            onChange={onChangeDestination}
            className="text-black-custom p-3 border-[1px] border-[#EEE] rounded-[4px] focus:outline-none placeholder:text-[#9B9B9B]"
          />
        </div>
      </div>
      {/* Truck type and Number of trips */}
      <div className="pt-6 grid grid-cols-3 gap-2">
        {/* Truck type */}
        <div className="col-span-2 flex flex-col gap-2 text-sm leading-[18px] font-medium">
          <span className="text-[#989898]">Truck type</span>
          <div className="bg-white p-3 border-[1px] border-[#EEE] rounded-[4px]">
            <select
              value={truckType}
              onChange={onChangeTruckType}
              className={`w-full ${
                truckType === '' ? 'text-[#9B9B9B]' : 'text-black-custom'
              } focus:outline-none hover:cursor-pointer`}
            >
              <option value="">Select truck type</option>
              {truckTypeOptions}
            </select>
          </div>
        </div>
        {/* Number of trips */}
        <div className="flex flex-col gap-2 text-sm leading-[18px] font-medium">
          <span className="text-[#989898]">Number of trips</span>
          <input
            type="text"
            placeholder="Enter trips"
            value={numberOfTrips}
            onChange={onChangeNumberOfTrips}
            className="text-black-custom p-3 border-[1px] border-[#EEE] rounded-[4px] focus:outline-none placeholder:text-[#9B9B9B]"
          />
        </div>
      </div>
      {/* Load type */}
      <div className="pt-6">
        <div className="col-span-2 flex flex-col gap-2 text-sm leading-[18px] font-medium">
          <span className="text-[#989898]">Load type</span>
          <div className="bg-white p-3 border-[1px] border-[#EEE] rounded-[4px]">
            <select
              value={loadType}
              onChange={onChangeLoadType}
              className={`w-full ${
                loadType === '' ? 'text-[#9B9B9B]' : 'text-black-custom'
              } focus:outline-none hover:cursor-pointer`}
            >
              <option value="">Enter load type</option>
              {loadTypeOptions}
            </select>
          </div>
        </div>
      </div>
      {/* Price cap (per trip) and Tick price */}
      <div className="pt-6 grid grid-cols-2 gap-2">
        {/* Price cap (per trip) */}
        <div className="flex flex-col gap-2 text-sm leading-[18px] font-medium">
          <span className="text-[#989898]">Price cap for lane (per trip)</span>
          <input
            type="text"
            placeholder="Enter price cap per trip"
            value={priceCapPerTrip}
            onChange={onChangePriceCapPerTrip}
            className="text-black-custom p-3 border-[1px] border-[#EEE] rounded-[4px] focus:outline-none placeholder:text-[#9B9B9B]"
          />
        </div>
        {/* Tick price */}
        <div className="flex flex-col gap-2 text-sm leading-[18px] font-medium">
          <span className="text-[#989898]">Tick price</span>
          <input
            type="text"
            placeholder="Enter tick price"
            value={tickPrice}
            onChange={onChangeTickPrice}
            className="text-black-custom p-3 border-[1px] border-[#EEE] rounded-[4px] focus:outline-none placeholder:text-[#9B9B9B]"
          />
        </div>
      </div>
    </div>
  );
};

export default LaneFormItem;
