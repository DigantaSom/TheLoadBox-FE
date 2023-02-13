export type SideBarOption =
  | 'sourcing'
  | 'spot-bids'
  | 'contract'
  | 'indents'
  | 'carrier-manager'
  | 'settings';

export type SourcingPageTab = 'ongoing-auctions' | 'completed-auctions' | 'drafts' | 'all';

export type SelectInputOption = {
  value: string;
  label: string;
};
