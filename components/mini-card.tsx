import React from "react";

const MiniCard = () => {
  return (
    <div className="flex items-center justify-between h-[80px] w-[919px] rounded-[30px] border-[1px] bg-white p-[24px] shadow-lg p-8">
      <div className="flex items-center">
        <img src={"/logo1.jpg"} alt="Logo 1" className="w-17 h-12 mr-2" />
        <div>
          <h3 className="text-2xl font-bold">{"Social Media Assistant"}</h3>
          <div className="font-epilogue font-normal text-[16px] text-[#7C8493] pt-1">
            Yenigat Birhan. Addis Ababa, Ethiopia
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img src={"/link..jpg"} alt="Link" className="w-8 h-8 mr-2" />
        <img src={"/dula.jpg"} alt="Dula" className="h-8 mr-2 " />
        <div>
          <a className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[16px] cursor-pointer">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
