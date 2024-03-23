//app/page/[id]/page.tsx
import Description from "@/components/Description";
import IdealCandidate from "@/components/Candidates";
import React from "react";
import { getJob } from "@/Info/Dummy";
import MiniCard from "@/components/mini-card";
import Responsibilities from "@/components/Responsibilities";
import Address from "@/components/Address";

interface Props {
  params: {
    id: string;
  };
}

const JobDetail = ({ params }: Props) => {
  const { id } = params;
  const job = getJob(parseInt(id));

  if (!job) {
    return <div>Loading...</div>; 
  }
  return (
    <div className="flex flex-col items-center justify-center w-screen my-4 p-7">
      <div className="flex flex-col w-custom-width gap-10 ">
        
        {/* <p>{job.description}</p> */}
         
      <div className="flex flex-col items-center justify-center w-screen my-4">
      <div className="flex flex-col w-custom-width gap-10">
      <MiniCard id={job.id} title={job.title} organization={job.organization} />
      <h1 className="font-bold text-2xl pt-7">Description</h1>
        <Description />
        <Responsibilities />
        <IdealCandidate />
        <Address />
      </div>
    </div>
      </div>
    </div>
  );
};

export default JobDetail;
