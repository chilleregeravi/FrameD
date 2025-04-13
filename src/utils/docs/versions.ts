
import { SidebarStructure } from './types';

export interface Version {
  name: string;
  label: string;
  path: string;
  isDefault?: boolean;
  isPrerelease?: boolean;
}

export interface DocumentLevelSettings {
  enabled: boolean;
  default: 'inherit' | 'latest';
  allowOverride: boolean;
}

export interface BranchMappingConfig {
  [version: string]: string;
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
  documentVersionSettings: DocumentLevelSettings;
  branchMapping: BranchMappingConfig;
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
  },
  documentVersionSettings: {
    enabled: false,
    default: 'inherit',
    allowOverride: true
  },
  branchMapping: {}
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
    },
    documentVersionSettings: {
      enabled: false,
      default: 'inherit',
      allowOverride: true
    },
    branchMapping: {
      'latest': 'main',
      'v2': 'v2.x',
      'v1': 'v1.x',
      'next': 'develop'
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
  const config = getVersionConfig();
  
  // For document-level versioning, check if this document includes the specified version
  if (config.versioning === 'document' && config.documentVersionSettings.enabled) {
    // This would typically check document-specific metadata
    // For demonstration, we'll assume all docs have all versions
    return true;
  }
  
  // For global versioning, all documents have all versions
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
  
  if (!config.enabled) {
    return allVersions;
  }
  
  if (config.versioning === 'document' && config.documentVersionSettings.enabled) {
    // For document-level versioning, filter versions based on document metadata
    return allVersions.filter(version => hasVersion(path, version.name));
  }
  
  // For global versioning, all documents have all versions
  return allVersions;
};

// For branch-based versioning
export const getBranchForVersion = (version: string): string => {
  const config = getVersionConfig();
  return config.branchMapping[version] || 'main';
};

// Check if document-level versioning is active
export const isDocumentLevelVersioning = (): boolean => {
  const config = getVersionConfig();
  return config.enabled && 
         config.versioning === 'document' && 
         config.documentVersionSettings.enabled;
};

// Check if global versioning is active
export const isGlobalVersioning = (): boolean => {
  const config = getVersionConfig();
  return config.enabled && config.versioning === 'global';
};

// Check if branch-based versioning is active
export const isBranchVersioning = (): boolean => {
  const config = getVersionConfig();
  return config.enabled && config.versioning === 'branch';
};

// Set versioning strategy
export const setVersioningStrategy = (strategy: 'global' | 'document' | 'branch'): void => {
  // This would typically update the configuration in a real application
  console.log(`Setting versioning strategy to: ${strategy}`);
  
  // In a real application, we would update the configuration here
  // For now, we'll just log the change
};
