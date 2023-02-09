import { ChangeEvent, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChangeSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="my-[19px] flex items-center gap-2">
      <AiOutlineSearch />
      <input
        type="text"
        placeholder="Search for orders, indents, contracts"
        value={searchTerm}
        onChange={handleChangeSearchTerm}
        className="h-[18px] w-[242px] text-gray-500 placeholder:text-[#AFAFAF] text-sm leading-[18px] font-medium focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
