import { FC } from "react";

const Candidates: FC<{ Candidate: String[] }> = ({Candidate}) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-2xl">Ideal Candidate we want</h1>
      <ul className="text-gray-500 list-disc list-inside dark:text-gray-400">
        {Candidate.map((quality, index) => quality && <li key={index}>{quality}</li>)}
      </ul>
    </div>
  );
};

export default Candidates;
