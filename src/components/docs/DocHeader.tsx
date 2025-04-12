
import React from 'react';
import VersionSelector from './VersionSelector';
import { getVersionConfig } from '@/utils/docs/versions';

const DocHeader: React.FC = () => {
  const config = getVersionConfig();
  
  return (
    <div className="flex justify-between items-center mb-6">
      {config.enabled && ['header', 'both'].includes(config.selector.position) && (
        <VersionSelector position="header" />
      )}
    </div>
  );
};

export default DocHeader;
