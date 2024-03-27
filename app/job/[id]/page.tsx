"use client"
import Description from "@/components/Description";
import React from "react";
import Responsibilities from "@/components/Responsibilities";
import Address from "@/components/Address";
import { useGetOpportunityByIdQuery } from "@/app/api/Slices/jobSlice";
import Candidates from "@/components/Candidates";
import MiniCard from "@/components/mini-card";

const JobDetail = ({ params }: { params: { id: string } }) => {
 
  const id: string = params.id;
  const { data: opportunity,error } = useGetOpportunityByIdQuery(id);console.log(error)
  const responsibilities = opportunity?.data?.responsibilities.split("\n") || [];
  const idealCandidate = opportunity?.data?.idealCandidate.split("\n") || [];

  return (
    <>
    

    <div className="flex flex-col items-center justify-center w-screen my-4 p-10 ">
      <div className="flex flex-col w-custom-width gap-10">
      <div>
    {opportunity?.data ? (
      <MiniCard Opportunity={opportunity.data} />
    ) : null}
</div>
        <Description description={opportunity?.data?.description || "dewfrd"} />
        <Responsibilities responsibilities={responsibilities} />
        <Candidates Candidate={idealCandidate} />
        <Address address={opportunity?.data?.whenAndWhere || "dsferfea"} />
      </div>
    </div>
    </>
  );
};

export default JobDetail;
