// Logo
import React from 'react';

interface LogoProps {
  logo: string; 
}

const Logo: React.FC<LogoProps> = ({ logo }) => {
  return (
    <div className="h-[66px] w-[59px]">
      <img src={logo} alt="Logo" className="h-[100%] w-[100%] object-cover" />
    </div>
  );
};

export default Logo;
