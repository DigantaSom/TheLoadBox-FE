import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import {
  selectIsCreateNewAuctionClicked,
  setNewAuctionConfigurationDetails,
} from '../../features/auction/auction.slice';

import K from '../../constants';

const AuctionConfiguration = () => {
  const dispatch = useAppDispatch();
  const isCreateNewAuctionClicked = useAppSelector(selectIsCreateNewAuctionClicked);

  const auctionDurationHours_inputRef = useRef<HTMLInputElement>(null);
  const auctionDurationMinutes_inputRef = useRef<HTMLInputElement>(null);
  const auctionDurationSeconds_inputRef = useRef<HTMLInputElement>(null);
  const priceValidity_inputRef = useRef<HTMLInputElement>(null);

  const [auctionDurationHours, setAuctionDurationHours] = useState(12);
  const [auctionDurationMinutes, setAuctionDurationMinutes] = useState(0);
  const [auctionDurationSeconds, setAuctionDurationSeconds] = useState(0);
  const [priceValidity, setPriceValidity] = useState(12);
  const [priceValidityUnit, setPriceValidityUnit] = useState('months');

  useEffect(() => {
    if (isCreateNewAuctionClicked) {
      dispatch(
        setNewAuctionConfigurationDetails({
          auctionDuration: {
            hours: auctionDurationHours,
            minutes: auctionDurationMinutes,
            seconds: auctionDurationSeconds,
          },
          priceValidity: {
            value: priceValidity,
            unit: priceValidityUnit,
          },
        })
      );
    }
  }, [
    isCreateNewAuctionClicked,
    dispatch,
    auctionDurationHours,
    auctionDurationMinutes,
    auctionDurationSeconds,
    priceValidity,
    priceValidityUnit,
  ]);

  useEffect(() => {
    if (auctionDurationHours > 99) {
      setAuctionDurationHours(99);
    }
  }, [auctionDurationHours]);

  useEffect(() => {
    if (auctionDurationMinutes > 60) {
      setAuctionDurationMinutes(60);
    }
  }, [auctionDurationMinutes]);

  useEffect(() => {
    if (auctionDurationSeconds > 60) {
      setAuctionDurationSeconds(60);
    }
  }, [auctionDurationSeconds]);

  const onClickAuctionDurationHoursContainer = () => {
    auctionDurationHours_inputRef.current?.focus();
    auctionDurationHours_inputRef.current?.select();
  };
  const onClickAuctionDurationMinutesContainer = () => {
    auctionDurationMinutes_inputRef.current?.focus();
    auctionDurationMinutes_inputRef.current?.select();
  };
  const onClickAuctionDurationSecondsContainer = () => {
    auctionDurationSeconds_inputRef.current?.focus();
    auctionDurationSeconds_inputRef.current?.select();
  };
  const onClickPriceValidityContainer = () => {
    priceValidity_inputRef.current?.focus();
  };

  const onChangeAuctionDurationHours = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (isNaN(value)) return;
    setAuctionDurationHours(value);
  };
  const onChangeAuctionDurationMinutes = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (isNaN(value)) return;
    setAuctionDurationMinutes(value);
  };
  const onChangeAuctionDurationSeconds = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (isNaN(value)) return;
    setAuctionDurationSeconds(value);
  };
  const onChangePriceValidity = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (isNaN(value)) return;
    setPriceValidity(value);
  };
  const onChangePriceValidityUnit = (e: ChangeEvent<HTMLSelectElement>) => {
    setPriceValidityUnit(e.target.value);
  };

  const priceValidityUnitOptions = K.priceValidityUnits.map(value => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

  return (
    <div className="bg-white border-[1px] border-[#EEE] rounded-[4px]">
      {/* Auction Configuration */}
      <section className="p-4 border-b-[1px] border-[#EEE]">
        <span className="text-black-custom text-base leading-[21px] font-medium">
          Auction Configuration
        </span>
      </section>

      {/* Auction Duration */}
      <section className="p-4 border-b-[1px] border-[#EEE]">
        <span className="text-sm leading-[18px] text-[#9B9B9B]">Auction Duration</span>
        <div className="pt-2 flex items-center gap-2">
          <div
            onClick={onClickAuctionDurationHoursContainer}
            className="w-full p-3 border-[1px] border-[#EEE] rounded-[4px] text-black-custom text-sm 
            leading-[18px] font-normal flex items-center gap-1 hover:cursor-pointer"
          >
            <input
              ref={auctionDurationHours_inputRef}
              type="text"
              value={auctionDurationHours < 10 ? '0' + auctionDurationHours : auctionDurationHours}
              onChange={onChangeAuctionDurationHours}
              className="w-[18px] focus:outline-none"
            />
            <span>hr</span>
          </div>

          <div className="text-black-custom text-sm leading-[18px]">:</div>
          <div
            onClick={onClickAuctionDurationMinutesContainer}
            className="w-full p-3 border-[1px] border-[#EEE] rounded-[4px] text-black-custom text-sm 
            leading-[18px] font-normal flex items-center gap-1 hover:cursor-pointer"
          >
            <input
              ref={auctionDurationMinutes_inputRef}
              type="text"
              value={
                auctionDurationMinutes < 10 ? '0' + auctionDurationMinutes : auctionDurationMinutes
              }
              onChange={onChangeAuctionDurationMinutes}
              className="w-[18px] focus:outline-none"
            />
            <span>m</span>
          </div>
          <div className="text-black-custom text-sm leading-[18px]">:</div>
          <div
            onClick={onClickAuctionDurationSecondsContainer}
            className="w-full p-3 border-[1px] border-[#EEE] rounded-[4px] text-black-custom text-sm 
            leading-[18px] font-normal flex items-center gap-1 hover:cursor-pointer"
          >
            <input
              ref={auctionDurationSeconds_inputRef}
              type="text"
              value={
                auctionDurationSeconds < 10 ? '0' + auctionDurationSeconds : auctionDurationSeconds
              }
              onChange={onChangeAuctionDurationSeconds}
              className="w-[18px] focus:outline-none"
            />
            <span>s</span>
          </div>
        </div>
      </section>

      {/* Price Validity */}
      <section className="p-4">
        <span className="text-sm leading-[18px] text-[#9B9B9B]">Price Validity</span>
        <div className="mt-2 flex items-center gap-2">
          <div
            onClick={onClickPriceValidityContainer}
            className="w-full p-3 border-[1px] border-[#EEE] rounded-[4px] text-black-custom text-sm leading-[18px] font-normal hover:cursor-pointer"
          >
            <input
              ref={priceValidity_inputRef}
              type="text"
              value={priceValidity}
              onChange={onChangePriceValidity}
              className="w-full focus:outline-none"
            />
          </div>
          <div
            className="w-full p-3 border-[1px] border-[#EEE] rounded-[4px] text-black-custom text-sm 
            leading-[18px] font-normal"
          >
            <select
              value={priceValidityUnit}
              onChange={onChangePriceValidityUnit}
              className="w-full focus:outline-none hover:cursor-pointer"
            >
              {priceValidityUnitOptions}
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuctionConfiguration;
