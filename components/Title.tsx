// Title.tsx
import React from 'react';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    
    <div className="font-bold text-[20px] text-[#25324B]">
      {title}
    </div>
  );
};

export default Title;
