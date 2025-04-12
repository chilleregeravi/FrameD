
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  getAvailableVersions, 
  getCurrentVersion,
  extractVersionFromPath,
  getVersionedPath,
  getVersionConfig
} from '@/utils/docs/versions';
import { Tag } from 'lucide-react';

interface VersionSelectorProps {
  position?: 'header' | 'sidebar';
}

const VersionSelector: React.FC<VersionSelectorProps> = ({ position = 'header' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const versions = getAvailableVersions();
  const config = getVersionConfig();
  
  // If versioning is disabled or if component is rendered in a position that's not configured
  if (
    !config.enabled || 
    (position === 'header' && config.selector.position === 'sidebar') ||
    (position === 'sidebar' && config.selector.position === 'header')
  ) {
    return null;
  }
  
  const currentVersion = getCurrentVersion();
  const { version: pathVersion, basePath } = extractVersionFromPath(location.pathname);
  
  const handleVersionChange = (newVersionName: string) => {
    const newVersion = versions.find(v => v.name === newVersionName);
    if (!newVersion) return;
    
    // Navigate to the same page but with the new version
    const newPath = getVersionedPath(basePath, newVersion.name);
    navigate(newPath);
  };
  
  // Different styles based on position
  const className = position === 'header' 
    ? "w-40" 
    : "w-full mb-4";
  
  return (
    <div className={className}>
      <Select
        value={pathVersion || currentVersion.name}
        onValueChange={handleVersionChange}
      >
        <SelectTrigger className="h-8 text-xs">
          <div className="flex items-center gap-2">
            <Tag className="h-3.5 w-3.5" />
            <SelectValue placeholder="Select version" />
          </div>
        </SelectTrigger>
        <SelectContent>
          {versions.map((version) => (
            <SelectItem 
              key={version.name} 
              value={version.name}
              className={version.isPrerelease ? "text-amber-500" : ""}
            >
              {version.label}
              {version.isPrerelease && " (Pre-release)"}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default VersionSelector;
