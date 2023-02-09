import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const OngoingAuctions = () => {
  return (
    <table className="w-full border-t-[1px] border-l-[1px] border-r-[1px] border-[#EEE]">
      <thead>
        <tr className="font-bold text-[#AFAFAF] text-xs text-left border-b-[1px] border-[#EEE]">
          <th className="px-6 py-4">AUCTION ID</th>
          <th>AUCTION DETAILS</th>
          <th>TRUCK TYPE</th>
          <th>BIDS</th>
          <th>AUCTION CREATED</th>
          <th>TIME REMAINING</th>
        </tr>
      </thead>

      <tbody>
        <tr className="font-medium text-base border-b-[1px] border-[#EEE]">
          <td className="pl-6 align-top pt-4 text-[#AFAFAF]">#23323</td>
          <td className="py-4 flex flex-col font-medium text-[#383838]">
            <div className="flex items-center space-x-2">
              <span>Delhi</span>
              <HiOutlineArrowNarrowRight />
              <span>Mumbai</span>
            </div>
            <div className="text-[#AFAFAF] font-medium">4 Trips</div>
          </td>
          <td className="align-top pt-4 text-[#383838] font-medium">40 MT Trailer</td>
          <td className="align-top pt-4 text-[#383838] font-medium">3 Bids</td>
          <td className="align-top pt-4 text-[#383838] font-medium">12 Jan 2022, 12:23 PM</td>
          <td className="align-top pt-4 text-[#383838] font-medium">4hr : 32m : 22s</td>
        </tr>

        <tr className="font-medium text-base border-b-[1px] border-[#EEE]">
          <td className="pl-6 align-top pt-4 text-[#AFAFAF]">#23323</td>
          <td className="py-4 flex flex-col font-medium text-[#383838]">
            <div>For North Zone</div>
            <div className="text-[#AFAFAF] font-medium">3 Lanes</div>
          </td>
          <td className="align-top pt-4 text-[#383838] font-medium">Multiple</td>
          <td className="align-top pt-4 text-[#383838] font-medium">12 Bids</td>
          <td className="align-top pt-4 text-[#383838] font-medium">12 Jan 2022, 12:23 PM</td>
          <td className="align-top pt-4 text-[#383838] font-medium">4hr : 32m : 22s</td>
        </tr>

        <tr className="font-medium text-base border-b-[1px] border-[#EEE]">
          <td className="pl-6 align-top pt-4 text-[#AFAFAF]">#23323</td>
          <td className="py-4 flex flex-col font-medium text-[#383838]">
            <div className="flex items-center space-x-2">
              <span>Delhi</span>
              <HiOutlineArrowNarrowRight />
              <span>Amritsar</span>
            </div>
            <div className="text-[#AFAFAF] font-medium">4 Trips</div>
          </td>
          <td className="align-top pt-4 text-[#383838] font-medium">40 MT Trailer</td>
          <td className="align-top pt-4 text-[#383838] font-medium">3 Bids</td>
          <td className="align-top pt-4 text-[#383838] font-medium">12 Jan 2022, 12:23 PM</td>
          <td className="align-top pt-4 text-[#383838] font-medium">4hr : 32m : 22s</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OngoingAuctions;
