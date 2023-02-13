import { FC } from 'react';

interface BlackButtonProps {
  title: string;
  handleClickButton: () => void;
  disabled?: boolean;
}

const BlackButton: FC<BlackButtonProps> = ({ title, handleClickButton, disabled }) => {
  return (
    <button
      disabled={!!disabled}
      onClick={handleClickButton}
      className="p-3 bg-black text-white text-sm font-medium rounded-[4px] disabled:hover:cursor-not-allowed disabled:opacity-75"
    >
      {title}
    </button>
  );
};

export default BlackButton;
