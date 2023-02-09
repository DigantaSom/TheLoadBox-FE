import SampleDP from '../images/sample-dp.png';

const HeaderProfile = () => {
  return (
    <div className="my-[16px] h-[18px] flex items-center gap-2">
      <img src={SampleDP} alt="DP" width={24} height={24} className="rounded-[3px]" />
      <span className="py-[6px] text-[#383838] text-sm leading-[18px] font-medium">
        Ram Gopal Verma
      </span>
    </div>
  );
};

export default HeaderProfile;
