"use client"
import Card from "@/components/Card";
import { FaAngleDown } from "react-icons/fa";
import { useGetOpportunitiesQuery } from "@/api/Slices/jobSlice";
import Link from "next/link";

export const Job = () => {
  const { data: opportunities } = useGetOpportunitiesQuery();

  return (
    <main className="w-screen flex flex-col gap-3 items-center justify-center m-10">
      <div className="w-custom-width flex justify-between items-start mb-4 p-[6px] gap-[556px]">
        <div className="flex flex-col pl-5">
          <h1 className="text-3xl font-bold text-custom-text-darkblue pl-10">Opportunities</h1>
          <p className="pl-10 font-epilogue font-normal text-[16px] text-[#7C8493] ">Showing {opportunities?.data.length} results</p>
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
        {Array.isArray(opportunities?.data) && opportunities?.data.length > 0 ? (
          opportunities?.data.slice(2).map((item: Opportunity, index: number) => (
            <Link key={index} href={`/job/${item.id}`}>
              <Card key={index} Opportunity={item} />
            </Link>
          ))
        ) : null}
      </div>
    </main>
  );
};

export default Job;
