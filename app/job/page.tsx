import Description from "@/components/Description";
import IdealCandidate from "@/components/Candidates";
import Responsibilities from "@/components/Responsibilities";
import Address from "@/components/Address";
import React from "react";

const JobDetail = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen my-4">
      <div className="flex flex-col w-custom-width gap-10">
        <Description />
        <Responsibilities />
        <IdealCandidate />
        <Address />
      </div>
    </div>
  );
};

export default JobDetail;