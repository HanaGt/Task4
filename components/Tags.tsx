// Tags
import React from 'react';

const Tags = () => {
  return (
    <div className="flex w-[242px] h-[31px] gap-[8px]">
      <div className="bg-[#e0f5ef] w-[76px] h-[31px] rounded-[80px] p-[6px] gap-[8px] flex justify-center items-center">
        <div className="font-semibold text-[12px] text-[#56CDAD]">
          In person
        </div>
      </div>

      <div className="h-[100%] w-[1.5px] bg-gray-300"></div>

      <div className="w-[76px] h-[31px] rounded-[80px] p-[6px] gap-[8px] flex justify-center items-center border border-[#FFB836]">
        <div className="font-semibold text-[12px] text-[#FFB836]">
          Education
        </div>
      </div>

      <div className="w-[76px] h-[31px] rounded-[80px] p-[6px] gap-[8px] flex justify-center items-center border border-[#4640DE]">
        <div className="font-semibold text-[12px] text-[#4640DE]">
          IT
        </div>
      </div>
    </div>
  );
};

export default Tags;
