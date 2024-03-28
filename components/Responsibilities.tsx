import { FC } from "react";
import Tasks from "./Tasks";

interface ResponsibilitiesProps {
  responsibilities: string[];
}

const Responsibilities: FC<ResponsibilitiesProps> = ({
  responsibilities,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-2xl">Responsibilities</h1>
      <Tasks responsibilities={responsibilities} />
    </div>
  );
};

export default Responsibilities;
