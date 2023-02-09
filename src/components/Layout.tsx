import { useLocation, Outlet, Link } from 'react-router-dom';

import useGetSlugToTitle from '../hooks/useGetSlugToTitle';

import SideBar from './SideBar';
import Header from './Header';

import AddIcon from '../images/add-icon.png';

const Layout = () => {
  const { pathname } = useLocation();

  let header = '';

  if (
    pathname === '/' ||
    pathname === '/completed-auctions' ||
    pathname === '/drafts' ||
    pathname === '/all'
  ) {
    header = 'sourcing';
  } else {
    header = pathname.substring(1);
  }

  const headerText = useGetSlugToTitle(header);

  return (
    <>
      <div className="fixed w-60 h-screen bg-[#F7F8FC] overflow-y-scroll">
        <SideBar />
      </div>

      <div className="ml-60">
        <Header />

        <div className="pt-6 px-6">
          <div className="h-11 mb-8 flex items-center justify-between">
            <h2 className="text-[32px] leading-[42px] text-[#383838] font-bold">{headerText}</h2>

            <Link
              to="/create-new-auction"
              className="p-3 flex items-center gap-[10px] bg-black text-white rounded-[4px] hover:cursor-pointer"
            >
              <img src={AddIcon} alt="" />
              <span className="text-sm flex-1">Create new Auction</span>
            </Link>
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
