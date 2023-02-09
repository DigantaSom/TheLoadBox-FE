import SearchBar from './SearchBar';
import HeaderProfile from './HeaderProfile';

const Header = () => {
  return (
    <div className="h-14 px-6 flex items-center justify-between border-b-2 border-gray-200">
      <SearchBar />
      <HeaderProfile />
    </div>
  );
};

export default Header;
