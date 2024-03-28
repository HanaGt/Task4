import { FC } from "react";

interface DescriptionProps {
  description: string;
}

const Descriptions: FC<DescriptionProps> = ({ description }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-2xl">Description</h1>
      <p>{description}</p>
    </div>
  );
};

export default Descriptions;
