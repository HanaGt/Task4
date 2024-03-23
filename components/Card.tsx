import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Description from "./Description";
import Tags from "./Tags";
import Title from "./Title";
import Organization from "./Organization";

interface CardProps {
  id: number;
  title: string;
  logo: string;
  organization: string;
}

const Card: React.FC<CardProps> = ({ id, title, logo, organization }) => {
  return (
    <Link href={`/job/${id}`} passHref>
      <div className="h-custom-card-height w-[919px] rounded-[30px]  bg-white p-[24px] shadow-lg mb-6">
        <div className="flex flex-col md:flex-row ">
          <Logo logo={logo} />
          <div className="h-[100%] w-[100%] md:ml-[24px] mt-[24px] md:mt-0 md:w-[755px] flex flex-col gap-[8px]">
            <Title title={title} />
            <div className="flex w-[454px] h-[27px] gap-[8px] items-center">
              <div className="font-epilogue font-normal text-[16px] text-[#7C8493]">
                <Organization organization={organization} />
              </div>
            </div>
            <Description />
            <Tags />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
