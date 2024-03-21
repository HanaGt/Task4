import Description from "@/components/Description";
import Candidates from "@/components/Candidates";
import Responsibilities from "@/components/Responsibilities";
import Address from "@/components/Address";
import React from "react";

const JobDetail = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen my-4">
      <div className="flex flex-col w-custom-width gap-10">
      <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Description</h1>
          <p>
            As a Social Media Assistant, you will work closely with the social
            media manager or marketing team to execute social media strategies
            and campaigns. You will be responsible for assisting in the creation
            and scheduling of engaging content, monitoring social media
            channels, and interacting with followers. Your primary goal will be
            to enhance brand visibility, foster positive relationships with the
            audience, and drive engagement and conversions
          </p>
        </div>

        <Responsibilities />
        <Candidates />
        <Address />
      </div>
    </div>
  );
};

export default JobDetail;