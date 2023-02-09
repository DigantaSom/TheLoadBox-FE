import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import SourcingPage from './pages/sourcing/sourcing.page';
import OngoingAuctions from './pages/sourcing/OngoingAuctions';
import CompletedAuctions from './pages/sourcing/CompletedAuctions';
import DraftAuctions from './pages/sourcing/DraftActions';
import AllAuctions from './pages/sourcing/AllAuctions';

import SpotBidsPage from './pages/spot-bids.page';
import ContractPage from './pages/contract.page';
import IndentsPage from './pages/indents.page';
import CarrierManger from './pages/carrier-manager.page';
import SettingsPage from './pages/settings.page';

import CreateAuctionPage from './pages/create-new-auction/create-new-auction.page';
import LaneAuctionForm from './pages/create-new-auction/LaneAuctionForm';
import LotAuctionForm from './pages/create-new-auction/LotAuctionForm';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<SourcingPage />}>
            <Route index element={<OngoingAuctions />} />
            <Route path="completed-auctions" element={<CompletedAuctions />} />
            <Route path="drafts" element={<DraftAuctions />} />
            <Route path="all" element={<AllAuctions />} />
          </Route>

          <Route path="spot-bids" element={<SpotBidsPage />} />
          <Route path="contract" element={<ContractPage />} />
          <Route path="indents" element={<IndentsPage />} />
          <Route path="carrier-manager" element={<CarrierManger />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        <Route path="/create-new-auction" element={<CreateAuctionPage />}>
          <Route index element={<LaneAuctionForm />} />
          <Route path="lot-auction" element={<LotAuctionForm />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
