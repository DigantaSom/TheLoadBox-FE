import { ChangeEvent, useRef } from 'react';

import BlackButton from '../../components/BlackButton';

import AttachmentIcon from '../../images/attachment-icon.png';

const AuctionUploadAttachments = () => {
  const hiddenFile_inputRef = useRef<HTMLInputElement>(null);

  const handleClickFileUploadButton = () => {
    hiddenFile_inputRef.current?.click();
  };

  const handleAddFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const file = files ? files[0] : null;

    if (file) {
      // TODO: next steps with the file
    }
  };

  return (
    <div className="bg-white border-[1px] border-[#EEE] rounded-[4px]">
      <section className="p-4 border-b-[1px] border-[#EEE]">
        <span className="text-black-custom text-base leading-[21px] font-medium">Attachments</span>
      </section>

      <section className="p-8 flex flex-col justify-between items-center gap-9">
        <div className="flex flex-col items-center gap-4">
          <img src={AttachmentIcon} alt="Attachment" />
          <span className="text-[#9B9B9B] text-sm leading-[18px] font-medium text-center">
            Add files for carriers to refer like requirements, maps, etc.
          </span>
        </div>
        <BlackButton
          title="Add files"
          handleClickButton={handleClickFileUploadButton}
        ></BlackButton>
        <input
          ref={hiddenFile_inputRef}
          type="file"
          hidden
          accept=".pdf, .docx, .xls, .xlsx"
          onChange={handleAddFile}
        />
      </section>
    </div>
  );
};

export default AuctionUploadAttachments;
