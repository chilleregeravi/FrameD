
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
  getVersionConfig,
  isDocumentLevelVersioning,
  isGlobalVersioning,
  isBranchVersioning
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
    
    if (isGlobalVersioning() || isBranchVersioning()) {
      // For global or branch versioning, navigate to the same page but with the new version in the URL
      const newPath = getVersionedPath(basePath, newVersion.name);
      navigate(newPath);
    } 
    else if (isDocumentLevelVersioning()) {
      // For document-level versioning, use query parameter for version
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('version', newVersion.name);
      navigate(`${location.pathname}?${searchParams.toString()}`);
    }
  };
  
  // Get the current version from either the path or query parameter
  const getCurrentDisplayVersion = () => {
    if (isDocumentLevelVersioning()) {
      // For document-level versioning, check query parameter
      const searchParams = new URLSearchParams(location.search);
      const queryVersion = searchParams.get('version');
      return queryVersion || currentVersion.name;
    }
    
    // For global and branch versioning, use path version
    return pathVersion || currentVersion.name;
  };
  
  // Different styles based on position
  const className = position === 'header' 
    ? "w-40" 
    : "w-full mb-4";
  
  return (
    <div className={className}>
      <Select
        value={getCurrentDisplayVersion()}
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
