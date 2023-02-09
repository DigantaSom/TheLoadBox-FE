import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import SourcingIcon from '../images/side-bar/sourcing-icon.png';
import SpotBidsIcon from '../images/side-bar/spot-bids-icon.png';
import ContractIcon from '../images/side-bar/contract-icon.png';
import IndentsIcon from '../images/side-bar/indents-icon.png';
import CarrierManagementIcon from '../images/side-bar/carrier-management-icon.png';
import SettingsIcon from '../images/side-bar/settings-icon.png';

import { SideBarOption } from '../types';

const SideBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  let initialSelectedOption = '';

  if (
    pathname === '/' ||
    pathname === '/completed-auctions' ||
    pathname === '/drafts' ||
    pathname === '/all'
  ) {
    initialSelectedOption = 'sourcing';
  } else {
    initialSelectedOption = pathname.substring(1);
  }

  const [selectedOption, setSelectedOption] = useState<SideBarOption>(
    initialSelectedOption as SideBarOption
  );

  const handleChangeSelectOption = (option: SideBarOption) => {
    setSelectedOption(option);

    if (option === 'sourcing') {
      navigate('/');
    } else {
      navigate(option);
    }
  };

  const selectedOptionStyles = 'bg-[#29a87419] bg-opacity-10';

  return (
    <div className="px-4 pb-6">
      {/* TODO: Logo */}
      <div className="h-14"></div>

      <div className="flex flex-col space-y-3">
        <div
          onClick={() => handleChangeSelectOption('sourcing')}
          className={`p-3 flex items-center gap-2 font-medium text-sm text-[#29A874] hover:bg-[#29a87419] hover:bg-opacity-10 rounded-lg hover:cursor-pointer ${
            selectedOption === 'sourcing' && selectedOptionStyles
          }`}
        >
          <img src={SourcingIcon} alt="" />
          <span>Sourcing</span>
        </div>

        <div
          onClick={() => handleChangeSelectOption('spot-bids')}
          className={`p-3 flex items-center gap-2 font-medium text-sm text-[#29A874] hover:bg-[#29a87419] hover:bg-opacity-10 rounded-lg hover:cursor-pointer ${
            selectedOption === 'spot-bids' && selectedOptionStyles
          }`}
        >
          <img src={SpotBidsIcon} alt="" />
          <span>Spot Bids</span>
        </div>

        <div
          onClick={() => handleChangeSelectOption('contract')}
          className={`p-3 flex items-center gap-2 font-medium text-sm text-[#29A874] hover:bg-[#29a87419] hover:bg-opacity-10 rounded-lg hover:cursor-pointer ${
            selectedOption === 'contract' && selectedOptionStyles
          }`}
        >
          <img src={ContractIcon} alt="" />
          <span>Contract</span>
        </div>

        <div
          onClick={() => handleChangeSelectOption('indents')}
          className={`p-3 flex items-center gap-2 font-medium text-sm text-[#29A874] hover:bg-[#29a87419] hover:bg-opacity-10 rounded-lg hover:cursor-pointer ${
            selectedOption === 'indents' && selectedOptionStyles
          }`}
        >
          <img src={IndentsIcon} alt="" />
          <span>Indents</span>
        </div>

        <div
          onClick={() => handleChangeSelectOption('carrier-manager')}
          className={`p-3 flex items-center gap-2 font-medium text-sm text-[#29A874] hover:bg-[#29a87419] hover:bg-opacity-10 rounded-lg hover:cursor-pointer ${
            selectedOption === 'carrier-manager' && selectedOptionStyles
          }`}
        >
          <img src={CarrierManagementIcon} alt="" />
          <span>Carrier Manager</span>
        </div>

        <div
          onClick={() => handleChangeSelectOption('settings')}
          className={`p-3 flex items-center gap-2 font-medium text-sm text-[#29A874] hover:bg-[#29a87419] hover:bg-opacity-10 rounded-lg hover:cursor-pointer ${
            selectedOption === 'settings' && selectedOptionStyles
          }`}
        >
          <img src={SettingsIcon} alt="" />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
