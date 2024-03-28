import React from "react";
import Logo from "./Logo";
import Title from "./Title";
import Organization from "./Organization";
import Body from "./Body";
import CardTopics from "./CardTopics";


const Card: React.FC<{ Opportunity: Opportunity }> = ({ Opportunity }) => {
  const { logoUrl, title, orgName, description, categories } = Opportunity;

  return (
    
      <div className="h-custom-card-height w-[919px] rounded-[30px]  bg-white p-[24px] shadow-lg mb-6 overflow-hidden">
        <div className="flex flex-col md:flex-row ">
          <Logo logo = {logoUrl}  />
          <div className="h-[100%] w-[100%] md:ml-[24px] mt-[24px] md:mt-0 md:w-[755px] flex flex-col gap-[8px]">
            <Title title={title} />
            <div className="flex w-[454px] h-[27px] gap-[8px] items-center">
              <div className="font-epilogue font-normal text-[16px] text-[#7C8493]">
                <Organization organization={orgName} />
              </div>
            </div>
            <Body description = {description}/>
            <CardTopics  relatedTopics= {categories} />
          </div>
        </div>
      </div>
  
  );
};

export default Card;
