import { ChangeEvent, useState } from 'react';

import UploadIcon from '../../images/upload-icon.png';
import DeleteIcon from '../../images/delete-icon.png';
import RightArrowIcon from '../../images/right-arrow-icon.png';
import AddIcon2 from '../../images/add-icon-2.png';

import K from '../../constants';

const LaneAuctionForm = () => {
  const [auctionName, setAuctionName] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [truckType, setTruckType] = useState('');
  const [numberOfTrips, setNumberOfTrips] = useState('');
  const [loadType, setLoadType] = useState('');
  const [priceCapPerTrip, setPriceCapPerTrip] = useState('');
  const [tickPrice, setTickPrice] = useState('');

  const onChangeAuctionName = (e: ChangeEvent<HTMLInputElement>) => {
    setAuctionName(e.target.value);
  };
  const onChangeSource = (e: ChangeEvent<HTMLInputElement>) => {
    setSource(e.target.value);
  };
  const onChangeDestination = (e: ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
  };
  const onChangeTruckType = (e: ChangeEvent<HTMLSelectElement>) => {
    setTruckType(e.target.value);
  };
  const onChangeNumberOfTrips = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const value_number = +value;
    if (isNaN(value_number)) return;
    setNumberOfTrips(value);
  };
  const onChangeLoadType = (e: ChangeEvent<HTMLSelectElement>) => {
    setLoadType(e.target.value);
  };
  const onChangePriceCapPerTrip = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const value_number = +value;
    if (isNaN(value_number)) return;
    setPriceCapPerTrip(value);
  };
  const onChangeTickPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const value_number = +value;
    if (isNaN(value_number)) return;
    setTickPrice(value);
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
          <div className="my-4 p-4 bg-[#FAFAFA] border-[1px] border-[#EEE] rounded-lg">
            {/* Lane number */}
            <div className="flex items-center justify-between border-b-[1px] border-[#D6D6D6] pb-4">
              <div className="text-black-custom text-base leading-[18px] font-medium">Lane 1</div>
              <div className="hover:cursor-pointer" title="Delete Lane">
                <img src={DeleteIcon} alt="Delete Lane" />
              </div>
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

          {/* Add Lane button */}
          <button className="bg-[#F6F6F6] radius-[4px] p-3 flex items-center gap-2 hover:cursor-pointer">
            <img src={AddIcon2} alt="" />
            <span className="text-black-custom text-sm leading-[18px] font-medium">Add lane</span>
          </button>
        </main>
      </div>
    </>
  );
};

export default LaneAuctionForm;
