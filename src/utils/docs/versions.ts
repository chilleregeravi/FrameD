
import { SidebarStructure } from './types';

export interface Version {
  name: string;
  label: string;
  path: string;
  isDefault?: boolean;
  isPrerelease?: boolean;
}

export interface VersionConfig {
  enabled: boolean;
  currentVersion: string;
  versions: Version[];
  /**
   * Determines if versioning is applied globally or per document
   * - 'global': All docs share the same version
   * - 'document': Each document can have its own version
   * - 'branch': Versions are mapped to git branches
   */
  versioning: 'global' | 'document' | 'branch';
  selector: {
    position: 'header' | 'sidebar' | 'both';
    showPrerelease: boolean;
  };
}

// Default configuration
export const defaultVersionConfig: VersionConfig = {
  enabled: false,
  currentVersion: 'latest',
  versions: [
    { name: 'latest', label: 'Latest', path: '', isDefault: true },
  ],
  versioning: 'global',
  selector: {
    position: 'header',
    showPrerelease: false
  }
};

// This would typically be loaded from a configuration file or API
export const getVersionConfig = (): VersionConfig => {
  // For demonstration, we'll use a more complex configuration
  return {
    enabled: true,
    currentVersion: 'v2',
    versions: [
      { name: 'latest', label: 'Latest (v2)', path: 'latest', isDefault: true },
      { name: 'v2', label: 'v2.0', path: 'v2', isDefault: false },
      { name: 'v1', label: 'v1.0', path: 'v1', isDefault: false },
      { name: 'next', label: 'Next (Unreleased)', path: 'next', isPrerelease: true }
    ],
    versioning: 'global',
    selector: {
      position: 'both',
      showPrerelease: true
    }
  };
};

// Get available versions
export const getAvailableVersions = (): Version[] => {
  const config = getVersionConfig();
  
  if (!config.enabled) {
    return [{ name: 'latest', label: 'Latest', path: '', isDefault: true }];
  }
  
  const versions = [...config.versions];
  
  // Filter out prereleases if not showing them
  if (!config.selector.showPrerelease) {
    return versions.filter(v => !v.isPrerelease);
  }
  
  return versions;
};

// Get current active version
export const getCurrentVersion = (): Version => {
  const config = getVersionConfig();
  const versions = getAvailableVersions();
  
  if (!config.enabled) {
    return versions[0];
  }
  
  const currentVersion = versions.find(v => v.name === config.currentVersion);
  if (currentVersion) {
    return currentVersion;
  }
  
  // Fallback to default version
  const defaultVersion = versions.find(v => v.isDefault);
  return defaultVersion || versions[0];
};

// Check if document has a specific version
export const hasVersion = (docPath: string, version: string): boolean => {
  // This would typically check if the document exists in the specified version
  // For demonstration, we'll assume all docs have all versions
  return true;
};

// Map a path to its versioned equivalent
export const getVersionedPath = (path: string, version?: string): string => {
  const config = getVersionConfig();
  
  if (!config.enabled) {
    return path;
  }
  
  const targetVersion = version || config.currentVersion;
  const versionObj = config.versions.find(v => v.name === targetVersion);
  
  if (!versionObj || versionObj.isDefault) {
    return path;
  }
  
  // Remove /docs prefix if present
  const normalizedPath = path.replace(/^\/docs/, '');
  
  // Add version to path
  return `/docs/${versionObj.path}${normalizedPath}`;
};

// Extract version from path
export const extractVersionFromPath = (path: string): { version: string | null, basePath: string } => {
  const config = getVersionConfig();
  
  if (!config.enabled) {
    return { version: null, basePath: path };
  }
  
  // Parse the path to extract version
  const match = path.match(/^\/docs\/([\w.-]+)(\/.*|$)/);
  
  if (!match) {
    return { version: null, basePath: path };
  }
  
  const potentialVersion = match[1];
  const restOfPath = match[2] || '';
  
  // Check if the extracted part is actually a known version
  const isKnownVersion = config.versions.some(v => v.path === potentialVersion);
  
  if (isKnownVersion) {
    return { 
      version: potentialVersion, 
      basePath: `/docs${restOfPath}` 
    };
  }
  
  // Not a version, so it's part of the path
  return { version: null, basePath: path };
};

// Get versions for a specific document
export const getDocumentVersions = (path: string): Version[] => {
  const config = getVersionConfig();
  const allVersions = getAvailableVersions();
  
  if (!config.enabled || config.versioning !== 'document') {
    return allVersions;
  }
  
  // For document-level versioning, we'd check which versions are available for this specific document
  // This is a simplified implementation
  return allVersions.filter(version => hasVersion(path, version.name));
};

// For branch-based versioning
export const getBranchForVersion = (version: string): string => {
  // Map versions to branch names
  const branchMap: Record<string, string> = {
    'latest': 'main',
    'v2': 'v2.x',
    'v1': 'v1.x',
    'next': 'develop'
  };
  
  return branchMap[version] || 'main';
};
