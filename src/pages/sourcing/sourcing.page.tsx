import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { SourcingPageTab } from '../../types';

const SourcingPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  let initialSelectedTab = '';

  if (pathname === '/') {
    initialSelectedTab = 'ongoing-auctions';
  } else {
    initialSelectedTab = pathname.substring(1);
  }

  const [selectedTab, setSelectedTab] = useState<SourcingPageTab>(
    initialSelectedTab as SourcingPageTab
  );

  const handleChangeSelectedTab = (tab: SourcingPageTab) => {
    setSelectedTab(tab);

    if (tab === 'ongoing-auctions') {
      navigate('/');
    } else {
      navigate(tab);
    }
  };

  const selectedTabStyles = 'border-b-[1px] border-black-custom hover:pb-4 -mb-[1px]';

  return (
    <>
      <div className="h-[34px] border-b-[1px] border-[#EEEEEE]">
        <div className="flex items-center">
          <div
            onClick={() => handleChangeSelectedTab('ongoing-auctions')}
            className={`text-black-custom text-sm leading-[18px] font-medium mr-6 pb-4 hover:pb-[15px]  hover:cursor-pointer hover:border-b-[1px] hover:border-black-custom ${
              selectedTab === 'ongoing-auctions' && selectedTabStyles
            }`}
          >
            Ongoing Auctions
          </div>

          <div
            onClick={() => handleChangeSelectedTab('completed-auctions')}
            className={`text-black-custom text-sm leading-[18px] font-medium mr-6 pb-4 hover:pb-[15px] hover:cursor-pointer hover:border-b-[1px] hover:border-black-custom ${
              selectedTab === 'completed-auctions' && selectedTabStyles
            }`}
          >
            Completed Auctions
          </div>

          <div
            onClick={() => handleChangeSelectedTab('drafts')}
            className={`text-[#383838] text-sm leading-[18px] font-medium mr-6 pb-4 hover:pb-[15px] hover:cursor-pointer hover:border-b-[1px] hover:border-[#383838] ${
              selectedTab === 'drafts' && selectedTabStyles
            }`}
          >
            Drafts
          </div>

          <div
            onClick={() => handleChangeSelectedTab('all')}
            className={`text-[#383838] text-sm leading-[18px] font-medium mr-6 pb-4 hover:pb-[15px] hover:cursor-pointer hover:border-b-[1px] hover:border-[#383838] ${
              selectedTab === 'all' && selectedTabStyles
            }`}
          >
            All
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Outlet />
      </div>
    </>
  );
};

export default SourcingPage;
