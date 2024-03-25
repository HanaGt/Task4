//app/page.tsx

import Card from "@/components/Card";
import { FaAngleDown } from "react-icons/fa6";
import cardData from "@/Info/cardData.json"


export default function Home() {
  return (
    <main className="w-screen flex flex-col gap-3 items-center justify-center m-10">
      <div className="w-custom-width flex justify-between items-start mb-4  p-[6px] gap-[556px]">
        <div className="flex flex-col pl-5">
          <h1 className="text-3xl font-bold text-custom-text-darkblue pl-10">Opportunities</h1>
          <p className="pl-10 font-epilogue font-normal text-[16px] text-[#7C8493] ">Showing {cardData.length} results</p>
        </div>
        <div className="flex gap-1">
          <p className="font-epilogue font-normal text-[16px] text-[#7C8493]">Sort by:</p>
          <div className="flex items-center gap-1">
            <p className="font-epilogue font-normal text-[16px] text-[#7C8493]">Most relevant</p>
            <FaAngleDown />
          </div>
          
        </div>
      </div>
      <div>
        {cardData.map((card) => (
          <Card 
          key={card.id} 
          title={card.title} 
          logo={card.logo} 
          organization={card.organization} id={card.id}/>
        ))}
      </div>
    </main>
  );
}