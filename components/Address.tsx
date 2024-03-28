
import { FC } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Address: FC<{ address: String }> = ({ address }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-2xl"> When & Where </h1>
      <div className="flex gap-2 items-center">
        <span className="font-bold">
          <FaLocationDot className="text-blue-500  border-gray-300 p-2 w-9 h-9" />
        </span>
        <span className="">
          {address}
        </span>
      </div>
    </div>
  );
};

export default Address;