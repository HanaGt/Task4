import AttributesList from "./AtributesList";

const Candidates = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-2xl">Ideal Candidate we want</h1>
      <AttributesList />
    </div>
  );
};

export default Candidates;