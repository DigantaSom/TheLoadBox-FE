import { FC } from 'react';

interface BlackButtonProps {
  title: string;
  handleClickButton: () => void;
}

const BlackButton: FC<BlackButtonProps> = ({ title, handleClickButton }) => {
  return (
    <button
      onClick={handleClickButton}
      className="p-3 bg-black text-white text-sm font-medium rounded-[4px]"
    >
      {title}
    </button>
  );
};

export default BlackButton;
