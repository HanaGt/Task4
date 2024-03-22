import React from 'react';


interface JobCardProps {
  logo: string;
  title: string;
}

const JobCard: React.FC<JobCardProps> = ({ logo, title }) => {
  return (
    <div className=" h-35 bg-white rounded-lg shadow-md flex items-center justify-between ">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <div>
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply
          </a>
        
      </div>
    </div>
  );
};

export default JobCard;
