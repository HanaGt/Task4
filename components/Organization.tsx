// Title.tsx
import React from 'react';

interface OrgProps {
  organization: string;
}

const Organization: React.FC<OrgProps> = ({organization }) => {
  return (
    
    <div>
    {organization}
    </div>
  
  );
};

export default Organization;
